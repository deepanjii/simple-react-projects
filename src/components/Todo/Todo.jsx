import Link from '@mui/material/Link';
import type { Node } from 'react';
import React, { useMemo } from 'react';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const Todo = (): Node => {
  const todos = useMemo(() => (
    [
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
    ]
  ));

  return (
    <div className="todo" data-testid="todo-bg-div">
      <div className="todo-container">
        <TodoHeader />
        <TodoInput />
        <TodoList todoList={todos} />
      </div>
      <div><Link href="/">Back to dashboard</Link></div>
    </div>
  );
};

export default Todo;
