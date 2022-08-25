import { createContext } from 'react';
import { ThemeContextValue } from '../components/Todo/types';

const defaultValue = {
  theme: 'light',
  toggleTheme: () => {}
}

export const TodoThemeContext = createContext<ThemeContextValue>(defaultValue);
