export enum AppTheme {
  dark = 'dark',
  light = 'light'
}

export interface Todo {
  id: number;
  isCompleted: boolean;
  name: string;
}

export type Todos = Array<Todo>;

export interface ThemeContextValue {
  theme: string;
  toggleTheme: () => void;
}

export type Filters = {
  [key: string]: string
};

export interface AddTodo {
  todoText: string,
  checked: boolean
}

export interface TodoContextValue {
  activeFilter: string;
  filteredTodos: Todo[];
  filters: Filters;
  leftTodosCount: number;
  todos: Todo[];
  onTodoAdd: (todo: AddTodo) => void;
  onTodoStatusChange: (todoId: number) => void;
  onTodoDelete: (todoId: number) => void;
  onClearCompletedTodo: () => void;
  onFilterChange: (filter: string) => void;
}
