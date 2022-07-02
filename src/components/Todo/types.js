export type Todo = {
  id: number,
  isCompleted: boolean,
  name: string
};

export type AddNewTodo = {
  todos: Array<Todo>,
  todoText: string,
  isCompleted: boolean
};

export type CreateNewTodo = {
  todosLength: number,
  todoText: string,
  todoStatus: boolean
};

export type UpdateTodoStatus = {
  todos: Array<Todo>,
  todoId: number
};
