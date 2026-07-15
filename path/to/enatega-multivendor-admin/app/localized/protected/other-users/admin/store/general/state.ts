# Implement state management for rider information
import { createContext, useState } from 'react';

const RiderContext = createContext();

const RiderProvider = ({ children }) => {
  const [riderInfo, setRiderInfo] = useState(null);

  const login = (riderInfo) => {
    setRiderInfo(riderInfo);
  };

  const logout = () => {
    setRiderInfo(null);
  };

  return (
    <RiderContext.Provider value={{ riderInfo, login, logout }}>
      {children}
    </RiderContext.Provider>
  );
};

export { RiderProvider, RiderContext };