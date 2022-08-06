import Link from '@mui/material/Link';
import React from 'react';
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
      <div><Link href="/">Back to dashboard</Link></div>
    </div>
  );
};

export default TodoLayout;
