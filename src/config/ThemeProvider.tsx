import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { UnistylesRuntime } from 'react-native-unistyles';
import { paperLightTheme, paperDarkTheme } from './themes';

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
  currentTheme: 'light' | 'dark' | 'auto';
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: 'light' | 'dark' | 'auto';
}

export function ThemeProvider({ children, initialTheme = 'auto' }: ThemeProviderProps) {
  const systemColorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark' | 'auto'>(initialTheme);
  
  const isDark = currentTheme === 'auto' 
    ? systemColorScheme === 'dark'
    : currentTheme === 'dark';

  const paperTheme = isDark ? paperDarkTheme : paperLightTheme;

  useEffect(() => {
    UnistylesRuntime.setTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const setTheme = (theme: 'light' | 'dark' | 'auto') => {
    setCurrentTheme(theme);
  };

  const contextValue = {
    isDark,
    toggleTheme,
    setTheme,
    currentTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <PaperProvider theme={paperTheme}>
        {children}
      </PaperProvider>
    </ThemeContext.Provider>
  );
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useAppTheme must be used within a ThemeProvider');
  }
  return context;
}