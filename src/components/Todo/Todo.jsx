import Link from '@mui/material/Link';
import type { Node } from 'react';
import React, { useEffect, useMemo, useState } from 'react';
import TodoContext from './TodoContext';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import type { Todo as TodoType } from './types';
import TodoUtils from './TodoUtils';
import useTheme from './useTheme';
import useTodo from './useTodo';

const initialTodos = [
  {
    id: 1,
    name: 'Finish project 1',
    isCompleted: true
  },
  {
    id: 2,
    name: 'Finish UTs for project 1',
    isCompleted: false
  }
];

const Todo = (): Node => {
  const {
    todos,
    getIncompleteTodosCount,
    onTodoAdd,
    onTodoDelete,
    onTodoStatusChange,
    onClearCompletedTodo
  } = useTodo(initialTodos);
  const [filteredTodos, setFilteredTodos]: [Array<TodoType>, Function] = useState(todos);
  const [activeFilter, setActiveFilter] = useState(TodoUtils.filters.ALL);
  const [theme, toggleTheme] = useTheme();
  const todoContextValue = useMemo(() => ({
    activeFilter,
    filters: TodoUtils.filters
  }));

  useEffect(() => {
    let updatedFilteredTodos = [];
    switch (activeFilter) {
      case TodoUtils.filters.ALL:
        updatedFilteredTodos = todos; break;
      case TodoUtils.filters.ACTIVE:
        updatedFilteredTodos = todos.filter(todo => todo.isCompleted === false);
        break;
      case TodoUtils.filters.COMPLETED:
        updatedFilteredTodos = todos.filter(todo => todo.isCompleted === true);
        break;
      default: break;
    }
    setFilteredTodos(updatedFilteredTodos);
  }, [activeFilter, todos]);

  const onFilterChange = filter => {
    setActiveFilter(filter);
  };

  return (
    <div className={`todo todo--${theme}`} data-testid="todo-bg-div">
      <div className="todo-container">
        <TodoContext.Provider value={todoContextValue}>
          <TodoHeader onThemeChange={toggleTheme} />
          <TodoInput onTodoAdd={onTodoAdd} />
          <TodoList
            leftTodoItemsCount={getIncompleteTodosCount()}
            onClearCompleted={onClearCompletedTodo}
            onDelete={onTodoDelete}
            onFilterChange={onFilterChange}
            onStatusChange={onTodoStatusChange}
            todoList={filteredTodos}
          />
        </TodoContext.Provider>
      </div>
      <div><Link href="/">Back to dashboard</Link></div>
    </div>
  );
};

export default Todo;
