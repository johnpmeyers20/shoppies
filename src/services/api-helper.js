const baseUrl = `http://localhost:3000`;
const axios = require('axios');
const api = axios.create({
  baseURL: baseUrl
});

export const getAllMovies = async () => {
  const resp = await api.get('https://www.omdbapi.com/?apikey=1f020500&s=star wars');
  console.log('getAllMovies resp', resp);
  return resp.data;
}

//?apikey=1f020500&s=star wars
// ?apikey=1f020500&s=${searchValue}

