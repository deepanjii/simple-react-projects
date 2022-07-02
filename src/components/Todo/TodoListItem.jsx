import React from 'react';
import CustomCheckbox from './CustomCheckbox';
import type { Todo } from './types';

type Props = {
  onDelete: Function,
  onStatusChange: Function,
  todo: Todo
}

const TodoListItem = ({ onDelete, onStatusChange, todo }: Props) => (
  <div key={todo.id} role="todo-item" className="todo-list__item">
    <CustomCheckbox
      checked={todo.isCompleted}
      name={todo.name}
      onChange={() => onStatusChange(todo.id)}
      role="todo-item-checkbox"
    />
    <div
      className={`todo-list__item__name ${todo.isCompleted ? 'todo-list__item__name--striked' : ''}`}
      role="todo-item-name"
    >
      {todo.name}
    </div>
    <button className="todo-list__item__delete" onClick={() => onDelete(todo.id)} role="todo-item-delete">
      <i className="fa-solid fa-xmark" />
    </button>
  </div>
);

export default TodoListItem;
