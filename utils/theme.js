import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';

// interface ThemeContextType {
//   isDarkMode: boolean;
//   setIsDarkMode: (state: boolean) => void;
// }
export const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // remembering user preference
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localDark = JSON.parse(localStorage.getItem('dark'));
      if (localDark === null) {
        setIsDarkMode(false);
        localStorage.setItem('dark', false);
      } else {
        setIsDarkMode(localDark);
      }
    }
  }, [router]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
