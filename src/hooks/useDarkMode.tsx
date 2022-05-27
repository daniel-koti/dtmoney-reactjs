import { createContext, useState, useContext, ReactNode } from 'react';

const DarkModeContext = createContext<DarkModeContextData>({} as DarkModeContextData);

interface DarkModeProviderProps {
  children: ReactNode;
}

interface DarkModeContextData {
  darkMode: boolean;
  handleToggleDarkMode: () => void;
}

export function DarkModeProvider({children}: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  function handleToggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return(
    <DarkModeContext.Provider value={{darkMode, handleToggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  return context;
}