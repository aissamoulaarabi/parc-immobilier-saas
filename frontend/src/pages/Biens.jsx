import { useState, useEffect } from 'react'
import { getBiens, creerBien } from '../services/api'

function Biens() {
  const [biens, setBiens] = useState([])
  const [adresse, setAdresse] = useState('')
  const [type, setType] = useState('')
  const [surface, setSurface] = useState('')
  const [statut, setStatut] = useState('vacant')

  useEffect(() => {
    getBiens().then(setBiens)
  }, [])

  async function handleAjouter() {
  const nouveauBien = await creerBien({
    adresse,
    type,
    surface: parseFloat(surface),
    statut: 'vacant',
    utilisateur_id: 1
  });
  setBiens([...biens, nouveauBien]);
  setAdresse('');
  setType('');
  setSurface('');
}

  return (
    <div>
      <h2>Liste des biens</h2>
      <input type="text" placeholder="Adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
      <input type="text" placeholder="Type (T2, T3...)" value={type} onChange={(e) => setType(e.target.value)} />
      <input type="number" placeholder="Surface" value={surface} onChange={(e) => setSurface(e.target.value)} />
      <button onClick={handleAjouter}>Ajouter</button>
      <ul>
        {biens.map(bien => (
          <li key={bien.bien_id}>{bien.adresse} - {bien.statut}</li>
        ))}
      </ul>
    </div>
  )
}

export default Biens
