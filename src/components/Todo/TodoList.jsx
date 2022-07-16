import React from 'react';
import TodoActionRow from './TodoActionRow';
import TodoListItem from './TodoListItem';
import TodoListRow from './TodoListRow';
import type { Todo } from './types';

type Props = {
  leftTodoItemsCount: number,
  onClearCompleted: Function,
  onDelete: Function,
  onFilterChange: Function,
  onStatusChange: Function,
  todoList: Array<Todo>
};

const TodoList = ({
  leftTodoItemsCount,
  onClearCompleted,
  onDelete,
  onFilterChange,
  onStatusChange,
  todoList
}: Props) => (
  <div className="todo-list">
    {
      todoList.map(todo => (
        <TodoListRow key={todo.id}>
          <TodoListItem
            key={todo.id}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
            todo={todo}
          />
        </TodoListRow>
      ))
    }
    <TodoListRow key={todoList.length}>
      <TodoActionRow
        leftTodoItemsCount={leftTodoItemsCount}
        onClearCompleted={onClearCompleted}
        onFilterChange={onFilterChange}
      />
    </TodoListRow>
  </div>
);

export default TodoList;
