import React from 'react';
import CustomCheckbox from './CustomCheckbox';
import type { Todo } from './types';

type Props = {
  onDelete: Function,
  onStatusChange: Function,
  todo: Todo
}

const TodoListItem = ({ onDelete, onStatusChange, todo }: Props) => (
  <div key={todo.id} className="todo-list__item">
    <CustomCheckbox
      checked={todo.isCompleted}
      name={todo.name}
      onChange={() => onStatusChange(todo.id)}
    />
    <div
      className={`todo-list__item__name ${todo.isCompleted ? 'todo-list__item__name--striked' : ''}`}
    >
      {todo.name}
    </div>
    <button className="todo-list__item__delete" onClick={() => onDelete(todo.id)} type='button'>
      <i className="fa-solid fa-xmark" />
    </button>
  </div>
);

export default TodoListItem;
