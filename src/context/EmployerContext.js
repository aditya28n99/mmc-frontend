import React, { createContext, useState } from 'react';

export const EmployerContext = createContext();

export const EmployerProvider = ({ children }) => {
  const [employerId, setEmployerId] = useState("068979ad-8d63-41a0-b95c-3d9fcfd1a432"); 

  return (
    <EmployerContext.Provider value={{ employerId, setEmployerId }}>
      {children}
    </EmployerContext.Provider>
  );
};
