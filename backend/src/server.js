require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');



const app = express();
app.use(cors());
const prisma = new PrismaClient();
app.use(express.json());
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { StrategieEmail, StrategieSMS } = require('./strategies');



app.get('/api/biens', async (req, res) => {
  const biens = await prisma.bien.findMany();
  res.json(biens);
});


app.get('/api/locataires', async (req, res) => {
    const locataires = await prisma.locataire.findMany();
    res.json(locataires);
});


app.get('/api/bails', async (req, res) => {
  const bails = await prisma.bail.findMany();
  res.json(bails);
});


app.get('/api/paiements', async (req, res) => {
  const paiements = await prisma.paiement.findMany();
  res.json(paiements);
});


app.get('/api/interventions', async (req, res) => {
  const interventions = await prisma.intervention.findMany();
  res.json(interventions);
});


app.get('/api/quittances', async (req, res) => {
  const quittances = await prisma.quittance.findMany();
  res.json(quittances);
});


app.post('/api/biens', async (req, res) => {
  const nouveauBien = await prisma.bien.create({
    data: req.body
  });
  res.json(nouveauBien);
});


app.post('/api/locataires', async (req, res) => {
    const nouveauLocataire = await prisma.locataire.create({
        data: req.body
    });
});


app.post('/api/bails', async (req, res) => {
  const nouveauBail = await prisma.bail.create({
    data: req.body
  });
  res.json(nouveauBail);
});


app.post('/api/paiements', async (req, res) => {
  const nouveauPaiement = await prisma.paiement.create({
    data: req.body
  });
  res.json(nouveauPaiement);
});


app.post('/api/interventions', async (req, res) => {
  const nouvelleIntervention = await prisma.intervention.create({
    data: req.body
  });
  res.json(nouvelleIntervention);
});


app.post('/api/quittances', async (req, res) => {
  const nouvelleQuittance = await prisma.quittance.create({
    data: req.body
  });
  res.json(nouvelleQuittance);
});


// Bien
app.put('/api/biens/:id', async (req, res) => {
  const bien = await prisma.bien.update({
    where: { bien_id: parseInt(req.params.id) },
    data: req.body
  });
  res.json(bien);
});


app.delete('/api/biens/:id', async (req, res) => {
  await prisma.bien.delete({
    where: { bien_id: parseInt(req.params.id) }
  });
  res.json({ message: "Bien supprimé" });
});


// Locataire
app.put('/api/locataires/:id', async (req, res) => {
  const locataire = await prisma.locataire.update({
    where: { locataire_id: parseInt(req.params.id) },
    data: req.body
  });
  res.json(locataire);
});



app.delete('/api/locataires/:id', async (req, res) => {
  await prisma.locataire.delete({
    where: { locataire_id: parseInt(req.params.id) }
  });
  res.json({ message: "Locataire supprimé" });
});


// Bail
app.put('/api/bails/:id', async (req, res) => {
  const bail = await prisma.bail.update({
    where: { bail_id: parseInt(req.params.id) },
    data: req.body
  });
  res.json(bail);
});


app.delete('/api/bails/:id', async (req, res) => {
  await prisma.bail.delete({
    where: { bail_id: parseInt(req.params.id) }
  });
  res.json({ message: "Bail supprimé" });
});


// Paiment
app.put('/api/paiements/:id', async (req, res) => {
  const paiement = await prisma.paiement.update({
    where: { paiement_id: parseInt(req.params.id) },
    data: req.body
  });
  res.json(paiement);
});


app.put('/api/paiements/:id/payer', async (req, res) => {
  const paiement = await prisma.paiement.update({
    where: { paiement_id: parseInt(req.params.id) },
    data: { statut: "payé" }
  });
  res.json(paiement);
});


app.delete('/api/paiements/:id', async (req, res) => {
  await prisma.paiement.delete({
    where: { paiement_id: parseInt(req.params.id) }
  });
  res.json({ message: "Paiement supprimé" });
});


// Intervention 
app.put('/api/interventions/:id', async (req, res) => {
  const intervention = await prisma.intervention.update({
    where: { intervention_id: parseInt(req.params.id) },
    data: req.body
  });
  res.json(intervention);
});


app.put('/api/interventions/:id/resoudre', async (req, res) => {
  const intervention = await prisma.intervention.update({
    where: { intervention_id: parseInt(req.params.id) },
    data: { statut: "résolue", dateResolution: new Date() }
  });
  res.json(intervention);
});


app.delete('/api/interventions/:id', async (req, res) => {
  await prisma.intervention.delete({
    where: { intervention_id: parseInt(req.params.id) }
  });
  res.json({ message: "Intervention supprimée" });
});

app.listen(3000, () => console.log('Serveur lancé sur le port 3000'));


// Quitance
app.delete('/api/quittances/:id', async (req, res) => {
  await prisma.quittance.delete({
    where: { quittance_id: parseInt(req.params.id) }
  });
  res.json({ message: "Quittance supprimée" });
});


// Enregistrer 

app.post('/api/auth/register', async (req, res) => {
  const { email, motDePasse, role } = req.body;

  const existant = await prisma.utilisateur.findUnique({ where: { email } });
  if (existant) {
    return res.status(400).json({ message: "Cet email est déjà utilisé" });
  }

  const hash = await bcrypt.hash(motDePasse, 10);
  const utilisateur = await prisma.utilisateur.create({
    data: { email, motDePasseHash: hash, role }
  });
  res.json({ id: utilisateur.utilisateur_id, email: utilisateur.email });
});


// Lging

app.post('/api/auth/login', async (req, res) => {
  const { email, motDePasse } = req.body;

  const utilisateur = await prisma.utilisateur.findUnique({ where: { email } });
  if (!utilisateur) {
    return res.status(401).json({ message: "Email ou mot de passe incorrect" });
  }

  const motDePasseValide = await bcrypt.compare(motDePasse, utilisateur.motDePasseHash);
  if (!motDePasseValide) {
    return res.status(401).json({ message: "Email ou mot de passe incorrect" });
  }

  const token = jwt.sign({ id: utilisateur.utilisateur_id, role: utilisateur.role }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
});


app.post('/api/locataires/:id/contacter', async (req, res) => {
  const { message, canal } = req.body;
  const locataire = await prisma.locataire.findUnique({
    where: { locataire_id: parseInt(req.params.id) }
  });

  const strategie = canal === 'sms' ? new StrategieSMS() : new StrategieEmail();
  strategie.envoyer(locataire, message);

  res.json({ message: "Message envoyé" });
});