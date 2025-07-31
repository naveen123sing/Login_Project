import React, { createContext, useContext, useState } from 'react';
import AuthService from './services/AuthService';

const AuthContext = createContext();

const user = AuthService.getCurrentUser();
console.log('Logged-in user:', user);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(AuthService.isLoggedIn());

  const login = async (username, password) => {
    const result = await AuthService.login(username, password);
    setIsAuthenticated(true);
    return result;
  };

  const logout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
