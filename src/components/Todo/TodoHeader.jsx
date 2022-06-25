import React from 'react';
import type { Node } from 'react';

const TodoHeader = (): Node => (
  <div className="todo-header">
    <span className="todo-header__text">Todo</span>
    <button className="theme-switch-button" type="button"><i className="fa-solid fa-moon" /></button>
  </div>
);

export default TodoHeader;
