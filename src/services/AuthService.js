import axios from 'axios';

const API_URL = 'https://api.freeapi.app/api/v1/users/login';

const login = async (username, password) => {
  const response = await axios.post(API_URL, { username, password });

  const { accessToken, refreshToken, user } = response.data.data;

  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    localStorage.setItem('user', JSON.stringify(user)); 
  }

  return response.data; 
};

const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
};

const isLoggedIn = () => {
  return !!localStorage.getItem('accessToken');
};

const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export default {
  login,
  logout,
  isLoggedIn,
  getCurrentUser,
};
