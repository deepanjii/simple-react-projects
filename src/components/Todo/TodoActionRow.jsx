import _ from 'lodash';
import React, { useContext } from 'react';
import TodoContext from './TodoContext';

type Props = {
  leftTodoItemsCount: number,
  onClearCompleted: Function,
  onFilterChange: Function
};

const TodoActionRow = ({ leftTodoItemsCount, onClearCompleted, onFilterChange }: Props) => {
  const { activeFilter, filters } = useContext(TodoContext);

  return (
    <div className="todo-action-row">
      <span className='todo-left-count'>{`${leftTodoItemsCount} items left`}</span>
      <span className='todo-toggle'>
        {
          _.map(filters, filter => (
            <button
              className={`${activeFilter === filter ? 'active' : ''}`}
              key={filter}
              onClick={() => onFilterChange(filter)}
              type='button'
            >
              {filter}
            </button>
          ))
        }
      </span>
      <button className='todo-clear-completed' onClick={onClearCompleted} type='button'>Clear Completed</button>
    </div>
  );
};

export default TodoActionRow;
