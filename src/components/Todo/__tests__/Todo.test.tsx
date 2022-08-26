import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import Todo from '../Todo';

describe('Todo', () => {
  const setup = () => {
    const utils = render(<Todo />, { wrapper: MemoryRouter });

    return utils;
  };

  afterEach(() => window?.localStorage?.clear());

  test('renders without error', () => {
    const { getByText } = setup();
    expect(getByText(/todo/i)).toBeTruthy();
  });

  test('should render the newly added todo', () => {
    const { container, getByLabelText, getByText } = setup();
    const todoInput = getByLabelText('todo-input-element', { selector: 'input' });

    expect(container.getElementsByClassName('todo-list__item').length).toEqual(2);

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
    const clearCompleteBtn = getByRole('button', { name: /clear completed/i });

    expect(container.getElementsByClassName('todo-list__item').length).toEqual(2);

    fireEvent.click(clearCompleteBtn);

    expect(container.getElementsByClassName('todo-list__item').length).toEqual(1);
  });

  test('should switch between different filters', () => {
    const { getByRole } = setup();
    const allBtn = getByRole('button', { name: /all/i });
    const activeBtn = getByRole('button', { name: /active/i });

    expect(allBtn).toHaveClass('active');

    fireEvent.click(activeBtn);

    expect(activeBtn).toHaveClass('active');
  });

  test('should display the todos based on the filter applied', () => {
    const { container, getByRole } = setup();
    const activeBtn = getByRole('button', { name: /active/i });
    const completedBtn = getByRole('button', { name: 'Completed' });

    expect(container.getElementsByClassName('todo-list__item').length).toEqual(2);
    expect(container.getElementsByClassName('todo-list__item__name--striked').length).toEqual(1);

    fireEvent.click(activeBtn);
    expect(container.getElementsByClassName('todo-list__item').length).toEqual(1);
    expect(container.getElementsByClassName('todo-list__item__name--striked').length).toEqual(0);

    fireEvent.click(completedBtn);
    expect(container.getElementsByClassName('todo-list__item').length).toEqual(1);
    expect(container.getElementsByClassName('todo-list__item__name--striked').length).toEqual(1);
  });

  test('should not add a new todo when enter is pressed with no todo text', () => {
    const { container, getByPlaceholderText } = setup();
    const todoInput = getByPlaceholderText('Create a new todo...');

    expect(container.getElementsByClassName('todo-list__item').length).toEqual(2);

    fireEvent.focus(todoInput);
    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(container.getElementsByClassName('todo-list__item').length).toEqual(2);
  });

  test('should add new todo when enter is pressed after entering some todo text', () => {
    const { container, getByPlaceholderText } = setup();
    const todoInput = getByPlaceholderText('Create a new todo...');

    expect(container.getElementsByClassName('todo-list__item').length).toEqual(2);

    fireEvent.focus(todoInput);
    fireEvent.change(todoInput, { target: { value: 'Finish mini project 1' } });
    fireEvent.keyDown(todoInput, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(container.getElementsByClassName('todo-list__item').length).toEqual(3);
  });
});
