import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../TodoList';

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

describe('TodoList', () => {
  const setup = () => {
    const utils = render(<TodoList todoList={todoList} />);
    const todos = utils.getAllByRole('todo-item');
    return {
      todos,
      ...utils
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
