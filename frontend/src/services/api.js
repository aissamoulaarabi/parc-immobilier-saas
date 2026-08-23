const API_URL = 'http://localhost:3000/api';

export async function getBiens() {
  const response = await fetch(`${API_URL}/biens`);
  return response.json();
}


export async function getLocataires() {
  const response = await fetch(`${API_URL}/locataires`);
  return response.json();
}

