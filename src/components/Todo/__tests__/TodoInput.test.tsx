import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoInput from '../TodoInput';
import TodoProvider from '../TodoProvider';

describe('TodoInput', () => {
  const setup = () => {
    const utils = render(
      <TodoProvider initialTodos={[]}>
        <TodoInput />
      </TodoProvider>
    );
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
    expect(todoInput.placeholder).toEqual('Create a new todo...');
  });

  test('can take input value', () => {
    const { input: todoInput } = setup();
    fireEvent.change(todoInput, { target: { value: 'Finish mini project 1' } });
    expect(todoInput.value).toBe('Finish mini project 1');
  });

  test('should check the checkbox on click', () => {
    const { getByLabelText } = setup();
    const checkbox = getByLabelText('custom-checkbox', { selector: 'input' });
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test('should clear the input when enter is pressed after entering some todo text', () => {
    const { input: todoInput } = setup();
    fireEvent.change(todoInput, { target: { value: 'Finish mini project 1' } });
    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(todoInput.value).toEqual('');
  });
});
