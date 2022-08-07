import React from 'react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import type { ThemeContextValue } from './types';
import useTheme from '../../hooks/useTheme';

type TodoLayoutProps = {
  children: ReactNode
}

const TodoLayout = ({ children }: TodoLayoutProps) => {
  const { theme }: ThemeContextValue = useTheme();

  return (
    <div className={`todo todo--${theme}`} data-testid="todo-bg-div">
      <div className="todo-container">
        {children}
      </div>
      <div><Link to='/projects'>Back to dashboard</Link></div>
    </div>
  );
};

export default TodoLayout;
