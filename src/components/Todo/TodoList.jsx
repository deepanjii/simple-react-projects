import React from 'react';
import TodoActionRow from './TodoActionRow';
import TodoListItem from './TodoListItem';
import TodoListRow from './TodoListRow';
import type { Todo } from './types';

type Props = {
  onStatusChange: Function,
  todoList: Array<Todo>
};

const TodoList = ({ onStatusChange, todoList }: Props) => (
  <div className="todo-list">
    {
      todoList.map(todo => (
        <TodoListRow key={todo.id}>
          <TodoListItem key={todo.id} onStatusChange={onStatusChange} todo={todo} />
        </TodoListRow>
      ))
    }
    <TodoListRow key={todoList.length}>
      <TodoActionRow
        leftTodoItemsCount={5}
        onClearCompleted={null}
        onFilterSelected={null}
      />
    </TodoListRow>
  </div>
);

export default TodoList;
