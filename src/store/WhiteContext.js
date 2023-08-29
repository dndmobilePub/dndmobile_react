import { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

const WhiteContext = createContext();

export function WhiteProvider({ children }) {
const { pathname } = useLocation();
  const [white, setWhite] = useState(pathname === '/'?true:false);
console.log(pathname, white)
  return (
    <WhiteContext.Provider value={{ white, setWhite }}>
      {children}
    </WhiteContext.Provider>
  );
}

export function useWhiteContext() {
  return useContext(WhiteContext);
}