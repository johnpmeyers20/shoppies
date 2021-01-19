const axios = require('axios');
const url = `http://www.omdbapi.com/?apikey=1f020500&s=${searchValue}`;const api = axios.create({
  baseURL: baseUrl
});

export const 

// ====================================
// ============= Auth =================
// ====================================

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users/', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  try {
    console.log('This is from verifyUser in api-helper')
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`
      const resp = await api.get('/auth/verify');
      return resp.data
    }
    return false
  } catch (e) {
    return false
  }
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ====================================
// ============= Users ================
// ====================================

export const getAllUsers = async () => {
  const resp = await api.get('/users');
  return resp.data;
}
 
export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
}

export const postUser = async (userData) => {
  const resp = await api.post('/users', { user: userData });
  return resp.data;
}

export const updateUser = async (userData, id) => {
  const resp = await api.put(`/users/${id}`, { user: userData });
  return resp.data;
}

export const destroyUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp.data;
}

// ====================================
// ============= Songs ==============
// ====================================

export const getAllSongs = async () => {
  const resp = await api.get('/users/:user_id/songs');
  return resp.data;
}

export const addSong = async (songId, id) => {
  const resp = await api.get(`/users/${songId}/songs`);
  return resp.data
}

// ====================================
// ============= Songs by JP ==============
// ====================================

export const postSong = async (songData, user_id) => {
  const resp = await api.post(`/users/${user_id}/songs`, { song: songData });
  return resp.data;
}

export const updateSong = async (songData, song) => {
  const resp = await api.put(`/users/:user_id/songs/${song}`, { song: songData });
  return resp.data;
}

export const destroySong = async (id) => {
  const resp = await api.delete(`/users/:user_id/songs/${id}`);
  return resp.data;
}