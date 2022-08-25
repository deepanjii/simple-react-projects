import React, { useMemo } from 'react';
import { ThemeContextValue, AppTheme } from './types';
import { TodoThemeContext } from '../../contexts/TodoThemeContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

type TodoThemeProviderProps = {
  children: JSX.Element
};

const TodoThemeProvider = ({ children }: TodoThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useLocalStorage('theme', AppTheme.light);
  const toggleTheme = () => {
    setTheme(theme === AppTheme.light ? AppTheme.dark : AppTheme.light);
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
