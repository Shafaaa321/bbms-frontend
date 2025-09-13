// src/RoleContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null);         // 'admin', 'user', 'staff'
  const [subRole, setSubRole] = useState(null);   // 'donor' or 'receiver'
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load session from localStorage on app start
  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    const savedSubRole = localStorage.getItem('subRole');
    const savedLogin = localStorage.getItem('isLoggedIn') === 'true';

    if (savedLogin && savedRole) {
      setRole(savedRole);
      setSubRole(savedSubRole || null);
      setIsLoggedIn(true);
    }
  }, []);

  // Persist session to localStorage
  useEffect(() => {
    localStorage.setItem('role', role || '');
    localStorage.setItem('subRole', subRole || '');
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [role, subRole, isLoggedIn]);

  // Clear all on logout
  const logout = () => {
    setRole(null);
    setSubRole(null);
    setIsLoggedIn(false);
    localStorage.clear();
  };

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        subRole,
        setSubRole,
        isLoggedIn,
        setIsLoggedIn,
        logout,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

// Custom hook to use context
export const useRole = () => useContext(RoleContext);
