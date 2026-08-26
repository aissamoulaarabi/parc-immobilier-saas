const API_URL = 'http://localhost:3000/api';

export async function getBiens() {
  const response = await fetch(`${API_URL}/biens`);
  return response.json();
}


export async function getLocataires() {
  const response = await fetch(`${API_URL}/locataires`);
  return response.json();
}


export async function creerBien(bien) {
  const response = await fetch(`${API_URL}/biens`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bien)
  });
  return response.json();
}

export async function creerLocataire(locataire) {
  const response = await fetch(`${API_URL}/locataires`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(locataire)
  });
  return response.json();
}


export async function supprimerBien(id) {
  await fetch(`${API_URL}/biens/${id}`, { method: 'DELETE' });
}

