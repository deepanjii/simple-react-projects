import React from 'react';
import TodoActionRow from './TodoActionRow';
import TodoListItem from './TodoListItem';
import TodoListRow from './TodoListRow';
import TodoUtils from './TodoUtils';
import type { Todo } from './types';

type Props = {
  onClearCompleted: Function,
  onDelete: Function,
  onFilterChange: Function,
  onStatusChange: Function,
  todoList: Array<Todo>
};

const TodoList = ({
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
        leftTodoItemsCount={TodoUtils.getIncompleteTodosCount({ todos: todoList })}
        onClearCompleted={onClearCompleted}
        onFilterChange={onFilterChange}
      />
    </TodoListRow>
  </div>
);

export default TodoList;
