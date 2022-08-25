import React from 'react';
import CustomCheckbox from './CustomCheckbox';
import type { Todo } from './types';

type Props = {
  onDelete: (id: number) => void,
  onStatusChange: (id: number) => void,
  todo: Todo
};

const TodoListItem = ({ onDelete, onStatusChange, todo }: Props) => (
  <div key={todo.id} className="todo-list__item">
    <CustomCheckbox
      checked={todo.isCompleted}
      onChange={() => onStatusChange(todo.id)}
    />
    <div
      className={`todo-list__item__name ${todo.isCompleted ? 'todo-list__item__name--striked' : ''}`}
    >
      {todo.name}
    </div>
    <button
      aria-label="DeleteTodo"
      className="todo-list__item__delete"
      onClick={() => onDelete(todo.id)}
      type='button'
    />
  </div>
);

export default TodoListItem;
