import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

const commonProperties = {
  margins: {
    sm: 2,
    md: 4,
    lg: 8,
    xl: 12,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
  },
};

export const lightTheme = {
  ...commonProperties,
  colors: {
    ...MD3LightTheme.colors,
    typography: '#000000',
    background: '#ffffff',
    surface: '#ffffff',
    surfaceVariant: '#f5f5f5',
  },
} as const;

export const darkTheme = {
  ...commonProperties,
  colors: {
    ...MD3DarkTheme.colors,
    typography: '#ffffff',
    background: '#121212',
    surface: '#121212',
    surfaceVariant: '#1e1e1e',
  },
} as const;

export const paperLightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...lightTheme.colors,
  },
};

export const paperDarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    ...darkTheme.colors,
  },
};
