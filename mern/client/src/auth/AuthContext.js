// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = (email, password) => {
    // Implementa la lógica de autenticación aquí
    // Si las credenciales son válidas, establece loggedIn en true
    return new Promise((resolve, reject) => {
      // Lógica de autenticación (puede ser una llamada a una API, etc.)
      // Si las credenciales son válidas, establece loggedIn en true
      // Si hay un error, llama a reject con el mensaje de error
      // Si todo está bien, llama a resolve
    });
  };

  const logout = () => {
    // Implementa la lógica de cierre de sesión aquí
    // Por ejemplo, simplemente establece loggedIn en false
    setLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
