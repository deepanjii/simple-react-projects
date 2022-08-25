import { useContext } from 'react';
import { TodoThemeContext } from '../contexts/TodoThemeContext';

export default function useTheme() {
  const context = useContext(TodoThemeContext);
  if (context === undefined) {
    throw new Error('useTheme should be used within TodoThemeProvider');
  } else {
    return context;
  }
}
