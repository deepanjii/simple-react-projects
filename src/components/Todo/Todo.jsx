import Link from '@mui/material/Link';
import type { Node } from 'react';
import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import type { Todo as TodoType } from './types';
import TodoUtils from './TodoUtils';

const Todo = (): Node => {
  const [todos, setTodo]: [Array<TodoType>, Function] = useState([
    {
      id: 1,
      name: 'Finish project 1',
      isCompleted: true
    },
    {
      id: 2,
      name: 'Finish UTs for project 1',
      isCompleted: false
    }
  ]);

  const onTodoAdd = todo => {
    const { todoText, checked } = todo;
    const updatedTodos = TodoUtils.addNewTodo({ todos, todoText, todoStatus: checked });
    setTodo(updatedTodos);
  };

  const onTodoStatusChange = todoId => {
    const updatedTodos = TodoUtils.updateTodoStatus({ todos, todoId });
    setTodo(updatedTodos);
  };

  const onTodoDelete = todoId => {
    const updatedTodos = TodoUtils.deleteTodo({ todos, todoId });
    setTodo(updatedTodos);
  };

  const onClearCompletedTodo = () => {
    const updatedTodos = TodoUtils.clearCompletedTodos({ todos });
    setTodo(updatedTodos);
  };

  return (
    <div className="todo" data-testid="todo-bg-div">
      <div className="todo-container">
        <TodoHeader />
        <TodoInput onTodoAdd={onTodoAdd} />
        <TodoList
          onClearCompleted={onClearCompletedTodo}
          onDelete={onTodoDelete}
          onStatusChange={onTodoStatusChange}
          todoList={todos}
        />
      </div>
      <div><Link href="/">Back to dashboard</Link></div>
    </div>
  );
};

export default Todo;
