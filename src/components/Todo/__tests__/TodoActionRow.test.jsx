import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoActionRow from '../TodoActionRow';

describe('TodoActionRow', () => {
  const setup = extraProps => {
    const utils = render(
      <TodoActionRow
        leftTodoItemsCount={1}
        onClearCompleted={() => {}}
        onFilterSelected={() => {}}
        {...extraProps}
      />
    );
    const todoAll = utils.getByRole('todo-all');
    return {
      todoAll,
      ...utils
    };
  };

  test('should render correctly', () => {
    setup();
  });

  test('should display no of items left', () => {
    const { getByRole } = setup();
    expect(getByRole('todo-items-left')).toHaveTextContent('1 items left');
  });

  test('should display All, Active, Completed filter buttons', () => {
    const { getByRole } = setup();
    expect(getByRole('todo-all')).toHaveTextContent('All');
    expect(getByRole('todo-active')).toHaveTextContent('Active');
    expect(getByRole('todo-completed')).toHaveTextContent('Completed');
  });

  test('should invoke callbacks on clicking filter buttons', () => {
    const filterCallback = jest.fn().mockImplementation(() => {});
    const { todoAll, getByRole } = setup({ onFilterSelected: filterCallback });
    fireEvent.click(todoAll);
    expect(filterCallback).toHaveBeenCalled();
    fireEvent.click(getByRole('todo-active'));
    expect(filterCallback).toHaveBeenCalledWith('active');
    fireEvent.click(getByRole('todo-completed'));
    expect(filterCallback).toHaveBeenCalledWith('completed');
  });

  test('should invoke callback on clicking clear completed buttom', () => {
    const clearCompletedCallback = jest.fn().mockImplementation(() => {});
    const { getByRole } = setup({ onClearCompleted: clearCompletedCallback });
    fireEvent.click(getByRole('clear-completed'));
    expect(clearCompletedCallback).toHaveBeenCalled();
  });
});
