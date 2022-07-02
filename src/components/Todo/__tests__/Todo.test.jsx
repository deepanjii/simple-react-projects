import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Todo from '../Todo';

describe('Todo', () => {
  const setup = () => {
    const utils = render(<Todo />);

    return utils;
  };

  test('renders without error', async () => {
    const { getByText } = setup();
    expect(getByText(/todo/i)).toBeTruthy();
  });

  test('should render the newly added todo', () => {
    const { container, getByLabelText, getByText } = setup();
    expect(container.getElementsByClassName('todo-list__item').length).toEqual(2);
    const todoInput = getByLabelText('todo-input-element', { selector: 'input' });
    fireEvent.change(todoInput, { target: { value: 'Finish mini project 1' } });
    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter', charCode: 13 });
    expect(getByText(/Finish mini project 1/i)).toBeTruthy();
    expect(container.getElementsByClassName('todo-list__item').length).toEqual(3);
  });

  test('should strike through the completed todos', () => {
    const { container } = setup();
    const checkbox = container.getElementsByClassName('custom-checkbox__input')[2];
    expect(container.getElementsByClassName('todo-list__item__name--striked').length).toEqual(1);
    fireEvent.click(checkbox);
    expect(container.getElementsByClassName('todo-list__item__name--striked').length).toEqual(2);
  });

  test('should delete the todo when delete button is clicked', () => {
    const { container } = setup();
    const deleteTodoBtn = container.getElementsByClassName('todo-list__item__delete')[0];
    expect(container.getElementsByClassName('todo-list__item').length).toEqual(2);
    fireEvent.click(deleteTodoBtn);
    expect(container.getElementsByClassName('todo-list__item').length).toEqual(1);
  });

  test('should clear all completed todo when clear complete is clicked', () => {
    const { container, getByRole } = setup();
    expect(container.getElementsByClassName('todo-list__item').length).toEqual(2);
    const clearCompleteBtn = getByRole('button', { name: /clear completed/i });
    fireEvent.click(clearCompleteBtn);
    expect(container.getElementsByClassName('todo-list__item').length).toEqual(1);
  });
});
