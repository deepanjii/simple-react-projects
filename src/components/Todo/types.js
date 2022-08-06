export type Todo = {
  id: number,
  isCompleted: boolean,
  name: string
};

export type Todos = Array<Todos>;

export type ThemeContextValue = {
  theme: string,
  toggleTheme: Function
};

export type Filters = {
  ACTIVE: string,
  ALL: string,
  COMPLETED: string
};

export type TodoContextValue = {
  activeFilter: string,
  filteredTodos: Todos,
  filters: Filters,
  leftTodosCount: number,
  todos: Todos,
  onTodoAdd: Function,
  onTodoStatusChange: Function,
  onTodoDelete: Function,
  onClearCompletedTodo: Function,
  onFilterChange: Function
};
