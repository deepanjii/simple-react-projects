import React from 'react';

type Props = {
  leftTodoItemsCount: number,
  onClearCompleted: Function,
  onFilterSelected: Function
};

const TodoActionRow = ({ leftTodoItemsCount, onClearCompleted, onFilterSelected }: Props) => (
  <div className="todo-action-row">
    <span className='todo-left-count'>{`${leftTodoItemsCount} items left`}</span>
    <span className='todo-toggle'>
      <button className='active' onClick={() => onFilterSelected('all')} type='button'>All</button>
      <button onClick={() => onFilterSelected('active')} type='button'>Active</button>
      <button onClick={() => onFilterSelected('completed')} type='button'>Completed</button>
    </span>
    <button className='todo-clear-completed' onClick={onClearCompleted} type='button'>Clear Completed</button>
  </div>
);

export default TodoActionRow;
