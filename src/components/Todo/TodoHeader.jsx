import React from 'react';
import type { Node } from 'react';

type Props = {
  onThemeChange: Function
}

const TodoHeader = ({ onThemeChange }: Props): Node => (
  <div className="todo-header">
    <span className="todo-header__text">Todo</span>
    <button
      aria-label="SwitchTheme"
      className="theme-switch-button"
      onClick={onThemeChange}
      type='button'
    />
  </div>
);

export default TodoHeader;
