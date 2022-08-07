import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Todo from '../Todo';
import TodoProvider from '../TodoProvider';
import TodoThemeProvider from '../TodoThemeProvider';
import TodoUtils from '../TodoUtils';

describe('Todo Provider', () => {
  const setup = () => {
    const utils = render(
      <TodoThemeProvider>
        <TodoProvider initialTodos={TodoUtils.todos}>
          <Todo />
        </TodoProvider>
      </TodoThemeProvider>,
      { wrapper: MemoryRouter }
    );

    return utils;
  };

  test('should render the todos provided by the provider', () => {
    const { container } = setup();
    expect(container.getElementsByClassName('todo-list__item').length).toEqual(2);
  });
});
