import React from 'react';
import TodoListItem from './TodoListItem';
import type { Todo } from './types';

type Props = {
  todoList: Array<Todo>
};

const TodoList = ({ todoList }: Props) => (
  <div className="todo-list">
    {
      todoList.map(todo => (<TodoListItem key={todo.id} todo={todo} />))
    }
  </div>
);

export default TodoList;
