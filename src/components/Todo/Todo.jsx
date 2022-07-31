import Link from '@mui/material/Link';
import React from 'react';
import type { Node } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoUtils from './TodoUtils';
import useTheme from './useTheme';
import TodoFooter from './TodoFooter';
import TodoProvider from './TodoProvider';

const Todo = (): Node => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className={`todo todo--${theme}`} data-testid="todo-bg-div">
      <div className="todo-container">
        <TodoProvider initialTodos={TodoUtils.todos}>
          <TodoHeader onThemeChange={toggleTheme} />
          <TodoInput />
          <TodoList />
          <TodoFooter />
        </TodoProvider>
      </div>
      <div><Link href="/">Back to dashboard</Link></div>
    </div>
  );
};

export default Todo;
