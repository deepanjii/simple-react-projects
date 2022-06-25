import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoInput from '../TodoInput';

describe('TodoInput', () => {
  const setup = () => {
    const utils = render(<TodoInput />);
    const input = utils.getByLabelText('todo-input-element', { selector: 'input' });

    return {
      input,
      ...utils
    };
  };

  test('render todo input correctly', () => {
    const { input: todoInput } = setup();
    expect(todoInput).toBeTruthy();
  });

  test('has a placeholder', () => {
    const { input: todoInput } = setup();
    expect(todoInput.placeholder).toEqual('Enter a todo task here...');
  });

  test('can take input value', () => {
    const { input: todoInput } = setup();
    fireEvent.change(todoInput, { target: { value: 'Finish mini project 1' } });
    expect(todoInput.value).toBe('Finish mini project 1');
  });
});
