const axios = require('axios');

const API_URL = 'https://api.freeapi.app/api/v1/users/login';

const login = async (username, password) => {
  const response = await axios.post(API_URL, { username, password });
  if (response.data.token) {
    localStorage.setItem('authToken', response.data.token);
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem('authToken');
};

const isLoggedIn = () => {
  return !!localStorage.getItem('authToken');
};

module.exports = {
  login,
  logout,
  isLoggedIn,
};
