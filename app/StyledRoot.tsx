'use client';
import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';
import { ThemeProvider, Theme, CssBaseline } from '@mui/material';
import { lightTheme, darkTheme } from "./theme";

interface ThemeToggleContextProps {
  toggleTheme: () => void;
}

interface ThemeToggleProviderProps {
  children: ReactNode;
}

const ThemeToggleContext = createContext<ThemeToggleContextProps>({
  toggleTheme: () => {},
});

export const useThemeToggle = () => useContext(ThemeToggleContext);

export const ThemeToggleProvider: React.FC<ThemeToggleProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeObject: Theme = useMemo(() => (theme === 'light' ? lightTheme : darkTheme), [theme]);

  return (
    <ThemeToggleContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={themeObject}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};