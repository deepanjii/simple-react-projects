import _ from 'lodash';
import useTodo from '../../hooks/useTodo';
import { TodoContextValue } from './types';

const TodoFooter = ():JSX.Element => {
  const {
    activeFilter, filters, leftTodosCount, onClearCompletedTodo, onFilterChange
  }: TodoContextValue = useTodo();

  return (
    <div className="todo-footer">
      <span className='todo-left-count'>{`${leftTodosCount} items left`}</span>
      <span className='todo-toggle'>
        {
          _.map(filters, (filter: string) => (
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
      <button className='todo-clear-completed' onClick={() => onClearCompletedTodo()} type='button'>Clear Completed</button>
    </div>
  );
};

export default TodoFooter;
