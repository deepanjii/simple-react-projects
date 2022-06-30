import Link from '@mui/material/Link';
import type { Node } from 'react';
import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

type TodoType = {
  id: number,
  name: string,
  isCompleted: boolean
};

const Todo = (): Node => {
  const [todos, setTodo]: [TodoType, Function] = useState([
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
    const newTodo = {
      id: todos.length + 1,
      name: todoText,
      isCompleted: checked
    };

    setTodo([...todos, newTodo]);
  };

  return (
    <div className="todo" data-testid="todo-bg-div">
      <div className="todo-container">
        <TodoHeader />
        <TodoInput onTodoAdd={onTodoAdd} />
        <TodoList todoList={todos} />
      </div>
      <div><Link href="/">Back to dashboard</Link></div>
    </div>
  );
};

export default Todo;
