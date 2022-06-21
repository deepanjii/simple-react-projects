import Link from '@mui/material/Link';
import React from 'react';
import type { Node } from 'react';

const Todo = () => (
  <div className="todo" data-testid="todo-bg-div">
    <div className="todo-container">
      <h3>Todoo</h3>
    </div>
    <div><Link href="/">Back to dashboard</Link></div>
  </div>
);

export default Todo;
