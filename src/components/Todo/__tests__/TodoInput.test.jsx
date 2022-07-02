import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoInput from '../TodoInput';

describe('TodoInput', () => {
  const setup = (extraProps = {}) => {
    const utils = render(<TodoInput onTodoAdd={null} {...extraProps} />);
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

  test('shoud not invoke callback when enter is pressed with no todo text', () => {
    const onTodoAddCallback = jest.fn().mockImplementation(() => {});
    const { input: todoInput } = setup({ onTodoAdd: onTodoAddCallback });
    fireEvent.change(todoInput, { target: { value: '' } });
    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onTodoAddCallback).not.toHaveBeenCalled();
  });

  test('should invoke callback when enter is pressed after entering some todo text', () => {
    const onTodoAddCallback = jest.fn().mockImplementation(() => {});
    const { input: todoInput } = setup({ onTodoAdd: onTodoAddCallback });
    fireEvent.change(todoInput, { target: { value: 'Finish mini project 1' } });
    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(onTodoAddCallback).toHaveBeenCalled();
    expect(onTodoAddCallback).toHaveBeenCalledWith({ todoText: 'Finish mini project 1', checked: false });
  });

  test('should clear the input when enter is pressed after entering some todo text', () => {
    const onTodoAddCallback = jest.fn().mockImplementation(() => {});
    const { input: todoInput } = setup({ onTodoAdd: onTodoAddCallback });
    fireEvent.change(todoInput, { target: { value: 'Finish mini project 1' } });
    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(todoInput.value).toEqual('');
  });
});
