import { useState, useEffect } from 'react'
import { getBiens } from '../services/api'

function Biens() {
  const [biens, setBiens] = useState([])

  useEffect(() => {
    getBiens().then(setBiens)
  }, [])

  return (
    <div>
      <h2>Liste des biens</h2>
      <ul>
        {biens.map(bien => (
          <li key={bien.bien_id}>{bien.adresse} - {bien.statut}</li>
        ))}
      </ul>
    </div>
  )
}

export default Biens