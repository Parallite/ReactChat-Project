import React from 'react';

interface ThemeContext {
  theme: 'light' | 'dark';
  toogleTheme?: () => void;
}

const defaultContext: ThemeContext = {
  theme: 'dark',
};

export const ThemeContext = React.createContext(defaultContext);
