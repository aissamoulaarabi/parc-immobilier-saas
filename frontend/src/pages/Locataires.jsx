import { useState, useEffect } from 'react'
import { getLocataires, creerLocataire } from '../services/api'

function Locataires() {
  const [locataires, setLocataires] = useState([])
  const [nom, setNom] = useState('')
  const [prenom, setPrenom] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')

  useEffect(() => {
    getLocataires().then(setLocataires)
  }, [])

  async function handleAjouter() {
    const nouveau = await creerLocataire({ nom, prenom, email, telephone })
    setLocataires([...locataires, nouveau])
    setNom('')
    setPrenom('')
    setEmail('')
    setTelephone('')
  }

  return (
    <div>
      <h2>Liste des locataires</h2>
      <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
      <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
      <button onClick={handleAjouter}>Ajouter</button>
      <ul>
        {locataires.map(l => (
          <li key={l.locataire_id}>{l.nom} {l.prenom}</li>
        ))}
      </ul>
    </div>
  )
}

export default Locataires