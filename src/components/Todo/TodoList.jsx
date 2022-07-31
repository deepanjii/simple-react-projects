import React from 'react';
import TodoListItem from './TodoListItem';
import TodoListRow from './TodoListRow';
import useTodo from '../../hooks/useTodo';

const TodoList = () => {
  const { filteredTodos: todoList, onTodoDelete, onTodoStatusChange } = useTodo();
  return (
    <div className="todo-list">
      {
        todoList.map(todo => (
          <TodoListRow key={todo.id}>
            <TodoListItem
              key={todo.id}
              onDelete={onTodoDelete}
              onStatusChange={onTodoStatusChange}
              todo={todo}
            />
          </TodoListRow>
        ))
      }
    </div>
  );
};

export default TodoList;
