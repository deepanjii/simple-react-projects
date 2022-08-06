import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../TodoList';
import TodoProvider from '../TodoProvider';
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
    const { container, ...rest } = render(
      <TodoProvider initialTodos={TodoUtils.todos}>
        <TodoList />
      </TodoProvider>
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
