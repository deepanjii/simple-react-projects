import _ from 'lodash';
import type { AddNewTodo, CreateNewTodo, UpdateTodoStatus } from './types';

const TodoUtils = {
  addNewTodo({ todos, todoText, todoStatus }: AddNewTodo): Array<Todo> {
    const newTodo = this.createNewTodo({ todosLength: todos.length, todoText, todoStatus });
    return [...todos, newTodo];
  },
  createNewTodo({ todosLength, todoText, todoStatus }: CreateNewTodo): Todo {
    return {
      id: todosLength + 1,
      name: todoText,
      isCompleted: todoStatus
    };
  },
  updateTodoStatus({ todos, todoId }: UpdateTodoStatus): Array<Todo> {
    const updatedTodos = _.cloneDeep(todos);
    const todoIndex = _.findIndex(todos, { id: todoId });
    const updatedTodo = updatedTodos[todoIndex];
    updatedTodo.isCompleted = !updatedTodo.isCompleted;
    return updatedTodos;
  }
};

export default TodoUtils;
