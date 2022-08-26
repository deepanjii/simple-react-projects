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
        onStatusChange={() => {}}
        onDelete={() => {}}
        {...extraProps}
      />
    );
    const todoItemCheckbox = utils.getByRole('checkbox');
    const todoItemName = utils.getByText(/finish project 1/i);
    const todoItemDeleteBtn = utils.getByRole('button');

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
    const onStatusChangeCallback = jest.fn().mockImplementation(() => {});
    const { todoItemCheckbox } = setup({ onStatusChange: onStatusChangeCallback });
    fireEvent.click(todoItemCheckbox);
    expect(onStatusChangeCallback).toHaveBeenCalledWith(1);
    expect(onStatusChangeCallback).toHaveBeenCalledTimes(1);
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
