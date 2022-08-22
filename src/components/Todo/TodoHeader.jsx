/* @flow */
import React from 'react';
import type { Node } from 'react';
import type { ThemeContextValue } from './types';
import useTheme from '../../hooks/useTheme';

const TodoHeader = (): Node => {
  const { toggleTheme }: ThemeContextValue = useTheme();

  return (
    <div className="todo-header">
      <span className="todo-header__text">Todo</span>
      <button
        aria-label="theme switch"
        className="theme-switch-button"
        onClick={toggleTheme}
        type='button'
      />
    </div>
  );
};

export default TodoHeader;
