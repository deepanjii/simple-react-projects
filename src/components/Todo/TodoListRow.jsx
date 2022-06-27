import React from 'react';
import type { Node } from 'react';

type Props = {
  children: Node
};

const TodoListRow = ({ children }: Props) => (
  <div className="todo-list__row">{children}</div>
);

export default TodoListRow;
