import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import TodoListItem from '../TodoListItem';

const todo = {
  id: 1,
  name: 'Finish Project 1',
  isCompleted: false
};

describe('TodoListItem', () => {
  const setup = extraProps => {
    const utils = render(
      <TodoListItem
        todo={todo}
        onComplete={() => {}}
        onDelete={() => {}}
        {...extraProps}
      />
    );
    const todoItemCheckbox = utils.getByRole('todo-item-checkbox');
    const todoItemName = utils.getByRole('todo-item-name');
    const todoItemDeleteBtn = utils.getByRole('todo-item-delete');

    return {
      todoItemCheckbox,
      todoItemName,
      todoItemDeleteBtn,
      ...utils
    };
  };

  test('should render correctly', () => {
    const { todoItemCheckbox, todoItemName, todoItemDeleteBtn } = setup();
    expect(todoItemCheckbox).toBeTruthy();
    expect(todoItemCheckbox.checked).toBeFalsy();
    expect(todoItemName).toBeTruthy();
    expect(todoItemName.textContent).toEqual(todo.name);
    expect(todoItemDeleteBtn).toBeTruthy();
  });

  test('should callback when todo completed checkbox is clicked', () => {
    const onCompleteCallback = jest.fn().mockImplementation(() => {});
    const { todoItemCheckbox } = setup({ onComplete: onCompleteCallback });
    fireEvent.click(todoItemCheckbox);
    expect(onCompleteCallback).toHaveBeenCalledWith(1);
    expect(onCompleteCallback).toHaveBeenCalledTimes(1);
  });

  test('should callback when todo delete button is clicked', () => {
    const onDeleteCallback = jest.fn().mockImplementation(() => {});
    const { todoItemDeleteBtn } = setup({ onDelete: onDeleteCallback });
    fireEvent.click(todoItemDeleteBtn);
    expect(onDeleteCallback).toHaveBeenCalledWith(1);
    expect(onDeleteCallback).toHaveBeenCalledTimes(1);
  });

  test('should have a striked class when the todo is marked as complete', () => {
    const { todoItemName } = setup({ todo: { ...todo, isCompleted: true } });
    expect(todoItemName).toHaveClass('todo-list__item__name--striked');
  });
});
