import type { TodoContextValue, Todo } from './types';
import TodoListItem from './TodoListItem';
import TodoListRow from './TodoListRow';
import useTodo from '../../hooks/useTodo';

const TodoList = (): JSX.Element => {
  const { filteredTodos: todoList, onTodoDelete, onTodoStatusChange }: TodoContextValue = useTodo();
  return (
    <div className="todo-list">
      {
        todoList.map((todo: Todo) => (
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
