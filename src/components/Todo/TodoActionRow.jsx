import React from 'react';

type Props = {
  leftTodoItemsCount: number,
  onClearCompleted: Function,
  onFilterSelected: Function
};

const TodoActionRow = ({ leftTodoItemsCount, onClearCompleted, onFilterSelected }: Props) => (
  <div className="todo-action-row">
    <span className='todo-left-count' role='todo-items-left'>{`${leftTodoItemsCount} items left`}</span>
    <span className='todo-toggle'>
      <button className='active' onClick={() => onFilterSelected('all')}>All</button>
      <button onClick={() => onFilterSelected('active')}>Active</button>
      <button onClick={() => onFilterSelected('completed')}>Completed</button>
    </span>
    <button className='todo-clear-completed' onClick={onClearCompleted}>Clear Completed</button>
  </div>
);

export default TodoActionRow;
