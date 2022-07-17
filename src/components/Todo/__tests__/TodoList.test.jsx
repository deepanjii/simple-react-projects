import React from 'react';
import { render } from '@testing-library/react';
import TodoContext from '../TodoContext';
import TodoList from '../TodoList';
import TodoUtils from '../TodoUtils';

const todoList = [
  {
    id: 1,
    name: 'Finish project 1',
    isCompleted: false
  },
  {
    id: 2,
    name: 'Finish UTs for project 1',
    isCompleted: false
  }
];

/* eslint-disable react/jsx-no-constructed-context-values */
describe('TodoList', () => {
  const setup = () => {
    const todoContext = {
      activeFilter: 'All',
      filters: TodoUtils.filters
    };
    const { container, ...rest } = render(
      <TodoContext.Provider value={todoContext}>
        <TodoList todoList={todoList} />
      </TodoContext.Provider>
    );
    const todos = container.getElementsByClassName('todo-list__item');
    return {
      todos,
      ...rest
    };
  };

  test('should render correctly', () => {
    setup();
  });

  test('should render all the todos', () => {
    const { todos } = setup();
    expect(todos.length).toEqual(todoList.length);
  });
});
