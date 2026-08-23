import { useState, useEffect } from 'react'

function Locataires() {
  const [locataires, setLocataires] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/locataires')
      .then(res => res.json())
      .then(setLocataires)
  }, [])

  return (
    <div>
      <h2>Liste des locataires</h2>
      <ul>
        {locataires.map(l => (
          <li key={l.locataire_id}>{l.nom} {l.prenom}</li>
        ))}
      </ul>
    </div>
  )
}

export default Locataires