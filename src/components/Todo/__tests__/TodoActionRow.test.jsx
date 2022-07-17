import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoActionRow from '../TodoActionRow';
import TodoContext from '../TodoContext';
import TodoUtils from '../TodoUtils';

/* eslint-disable react/jsx-no-constructed-context-values */
describe('TodoActionRow', () => {
  const setup = extraProps => {
    const todoContext = {
      activeFilter: 'All',
      filters: TodoUtils.filters
    };

    const utils = render(
      <TodoContext.Provider value={todoContext}>
        <TodoActionRow
          leftTodoItemsCount={1}
          onClearCompleted={() => {}}
          onFilterChange={() => {}}
          {...extraProps}
        />
      </TodoContext.Provider>
    );
    const todoAll = utils.getByRole('button', { name: /all/i });
    return {
      todoAll,
      ...utils
    };
  };

  test('should render correctly', () => {
    setup();
  });

  test('should display no of items left', () => {
    const { getByText } = setup();
    expect(getByText(/1 items left/i)).toBeTruthy();
  });

  test('should display All, Active, Completed filter buttons', () => {
    const { getByRole } = setup();
    expect(getByRole('button', { name: /all/i })).toHaveTextContent('All');
    expect(getByRole('button', { name: /active/i })).toHaveTextContent('Active');
    expect(getByRole('button', { name: 'Completed' })).toHaveTextContent('Completed');
  });

  test('should invoke callbacks on clicking filter buttons', () => {
    const filterCallback = jest.fn().mockImplementation(() => {});
    const { todoAll, getByRole } = setup({ onFilterChange: filterCallback });
    fireEvent.click(todoAll);
    expect(filterCallback).toHaveBeenCalled();
    fireEvent.click(getByRole('button', { name: /active/i }));
    expect(filterCallback).toHaveBeenCalledWith('Active');
    fireEvent.click(getByRole('button', { name: 'Completed' }));
    expect(filterCallback).toHaveBeenCalledWith('Completed');
  });

  test('should invoke callback on clicking clear completed buttom', () => {
    const clearCompletedCallback = jest.fn().mockImplementation(() => {});
    const { getByRole } = setup({ onClearCompleted: clearCompletedCallback });
    fireEvent.click(getByRole('button', { name: /clear completed/i }));
    expect(clearCompletedCallback).toHaveBeenCalled();
  });
});
