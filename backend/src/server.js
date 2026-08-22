require('dotenv').config();
const express = require('express');
const { PrismaClient } = require('@prisma/client');



const app = express();
const prisma = new PrismaClient();
app.use(express.json());


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



app.listen(3000, () => console.log('Serveur lancé sur le port 3000'));