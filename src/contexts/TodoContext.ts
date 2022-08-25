import { createContext } from 'react';
import { Filters } from '../components/Todo/TodoUtils';
import { TodoContextValue } from '../components/Todo/types';

const defaultValue = {
  activeFilter: "",
  filteredTodos: [],
  filters: {},
  leftTodosCount: 0,
  todos: [],
  onTodoAdd: () => {},
  onTodoStatusChange: () => {},
  onTodoDelete: () => {},
  onClearCompletedTodo: () => {},
  onFilterChange: () => {}
}

const TodoContext = createContext<TodoContextValue>(defaultValue);

export default TodoContext;
