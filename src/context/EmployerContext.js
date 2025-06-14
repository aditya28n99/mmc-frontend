import React, { createContext, useState } from 'react';

export const EmployerContext = createContext();

export const EmployerProvider = ({ children }) => {
  const [employerId, setEmployerId] = useState("a76463ae-ea79-43f3-8d50-edec2e68f67a"); 

  return (
    <EmployerContext.Provider value={{ employerId, setEmployerId }}>
      {children}
    </EmployerContext.Provider>
  );
};
