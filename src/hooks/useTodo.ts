import TodoContext from '../contexts/TodoContext';
import { useContext } from 'react';

export default function useTodo() {
  const context = useContext(TodoContext);
  if(context === undefined) {
    throw new Error('useTodo must be used within TodoProvider');
  }
  return context;
}
