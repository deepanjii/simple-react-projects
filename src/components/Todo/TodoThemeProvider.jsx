import React, { useMemo } from 'react';
import type { Node } from 'react';
import type { ThemeContextValue } from './types';
import TodoThemeContext from '../../contexts/TodoThemeContext';
import useLocalStorage from '../../hooks/useLocalStorage';

type TodoThemeProviderProps = {
  children: Node
};

type ThemeState = [string, Function];

type AppTheme = {
  dark: string,
  light: string
};

const appTheme: AppTheme = {
  dark: 'dark',
  light: 'light'
};

const TodoThemeProvider = ({ children }: TodoThemeProviderProps): Node => {
  const [theme, setTheme]: ThemeState = useLocalStorage('theme', appTheme.light);
  const toggleTheme = () => {
    setTheme(theme === appTheme.light ? appTheme.dark : appTheme.light);
  };

  const value: ThemeContextValue = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme]);

  return (
    <TodoThemeContext.Provider value={value}>{children}</TodoThemeContext.Provider>
  );
};

export default TodoThemeProvider;
