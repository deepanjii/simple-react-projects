import _ from 'lodash';
import { useState } from 'react';
import type { CreateNewTodo, Todo as TodoType } from './types';

export default function useTodo(initialTodos = []) {
  const [todos, setTodo]: [Array<TodoType>, Function] = useState(initialTodos);

  const createNewTodo = ({ todosLength, todoText, todoStatus }: CreateNewTodo): Todo => ({
    id: todosLength + 1,
    name: todoText,
    isCompleted: todoStatus
  });

  const onTodoAdd = todo => {
    const { todoText, checked } = todo;
    const newTodo = createNewTodo({ todosLength: todos.length, todoText, todoStatus: checked });
    setTodo([...todos, newTodo]);
  };

  const onTodoStatusChange = (todoId: number) => {
    const updatedTodos = _.cloneDeep(todos);
    const todoIndex = _.findIndex(todos, { id: todoId });
    const updatedTodo = updatedTodos[todoIndex];
    updatedTodo.isCompleted = !updatedTodo.isCompleted;
    setTodo(updatedTodos);
  };

  const onTodoDelete = todoId => {
    const updatedTodos = _.filter(todos, todo => todo.id !== todoId);
    setTodo(updatedTodos);
  };

  const onClearCompletedTodo = () => {
    const updatedTodos = _.filter(todos, ({ isCompleted }) => isCompleted === false);
    setTodo(updatedTodos);
  };

  const getIncompleteTodosCount = (): number => (
    _.filter(todos, ({ isCompleted }) => isCompleted === false).length);

  return {
    todos,
    getIncompleteTodosCount,
    onTodoAdd,
    onTodoDelete,
    onTodoStatusChange,
    onClearCompletedTodo
  };
}
