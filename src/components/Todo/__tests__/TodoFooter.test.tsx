import { render } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import TodoProvider from '../TodoProvider';
import { TodoUtils } from '../TodoUtils';

/* eslint-disable react/jsx-no-constructed-context-values */
describe('TodoFooter', () => {
  const setup = () => {
    const utils = render(
      <TodoProvider initialTodos={TodoUtils.todos}>
        <TodoFooter />
      </TodoProvider>
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
});
