import React from 'react';

type Props = {
  leftTodoItemsCount: number,
  onClearCompleted: Function,
  onFilterSelected: Function
};

const TodoActionRow = ({ leftTodoItemsCount, onClearCompleted, onFilterSelected }: Props) => (
  <div className="todo-action-row">
    <span role='todo-items-left'>{`${leftTodoItemsCount} items left`}</span>
    <span>
      <button onClick={() => onFilterSelected('all')} role="todo-all">All</button>
      <button onClick={() => onFilterSelected('active')} role="todo-active">Active</button>
      <button onClick={() => onFilterSelected('completed')} role="todo-completed">Completed</button>
    </span>
    <button onClick={onClearCompleted} role="clear-completed">Clear Completed</button>
  </div>
);

export default TodoActionRow;
