import Link from '@mui/material/Link';
import React from "react";

const Todo = () => {
  return (
    <div className="todo">
      <div className="todo-container">
        <h3>Todo</h3>
      </div>
      <div><Link href="/">Back to dashboard</Link></div>
    </div>
  );
};

export default Todo;