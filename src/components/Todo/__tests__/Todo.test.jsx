import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Todo from '../Todo';

describe('Todo', () => {
  const setup = () => {
    const utils = render(<Todo />);

    return utils;
  };

  test('renders without error', async () => {
    const { getByText } =  setup();
    expect(getByText(/todo/i)).toBeTruthy();
  });

  test('should render the newly added todo', () => {
    const { getByLabelText, getByText } =  setup();
    const todoInput = getByLabelText('todo-input-element', { selector: 'input' });
    fireEvent.change(todoInput, { target: { value: 'Finish mini project 1' } });
    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(getByText(/Finish mini project 1/i)).toBeTruthy();
  });
});
