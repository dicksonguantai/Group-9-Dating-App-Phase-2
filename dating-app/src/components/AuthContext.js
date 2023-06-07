// AuthContext.js

import React, { createContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  // Define the state for signup and login data
  const [signupData, setSignupData] = useState(null);
  const [loginData, setLoginData] = useState(null);

  // Create a context value object with the state and any required functions
  const contextValue = {
    signupData,
    setSignupData,
    loginData,
    setLoginData,
  };

  // Provide the context value to the child components
  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
