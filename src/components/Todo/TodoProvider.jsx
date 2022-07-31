import _ from 'lodash';
import React, { useEffect, useReducer, useMemo } from 'react';
import type { CreateNewTodo, Todo as TodoType } from './types';
import TodoContext from '../../contexts/TodoContext';
import TodoUtils from './TodoUtils';

const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

const UPDATE_FILTER = 'UPDATE_FILTER';
const UPDATE_FILTERED_TODOS = 'UPDATE_FILTERED_TODOS';

const todosReducer = (state, action) => {
  let index;
  let updatedTodos;
  switch (action.type) {
    case ADD_TODO: return { ...state, todos: [...state.todos, action.payload] };

    case DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload.todoId) };

    case CLEAR_COMPLETED:
      updatedTodos = _.filter(state.todos, ({ isCompleted }) => !isCompleted);
      return { ...state, todos: updatedTodos };

    case UPDATE_TODO:
      index = state.todos.findIndex(todo => todo.id === action.payload.todoId);
      updatedTodos = [
        ...state.todos.slice(0, index), // everything before current todo
        {
          ...state.todos[index],
          isCompleted: !state.todos[index].isCompleted
        },
        ...state.todos.slice(index + 1) // everything after current todo
      ];
      return { ...state, todos: updatedTodos };

    case UPDATE_FILTER:
      return { ...state, activeFilter: action.payload };

    case UPDATE_FILTERED_TODOS:
      return { ...state, filteredTodos: action.payload };

    default: return state;
  }
};

type Props = {
  children: Node,
  initialTodos: Array<Todo>
}

const TodoProvider = ({ children, initialTodos }: Props) => {
  const [
    { todos, activeFilter, filteredTodos },
    dispatch
  ]: [{todos: Array<TodoType>}, Function] = useReducer(todosReducer, {
    todos: initialTodos,
    filteredTodos: initialTodos,
    activeFilter: TodoUtils.filters.ALL
  });

  useEffect(() => {
    let updatedTodos;
    switch (activeFilter) {
      case TodoUtils.filters.ALL:
        updatedTodos = todos; break;
      case TodoUtils.filters.ACTIVE:
        updatedTodos = todos.filter(todo => !todo.isCompleted);
        break;
      case TodoUtils.filters.COMPLETED:
        updatedTodos = todos.filter(todo => todo.isCompleted);
        break;
      default: updatedTodos = todos; break;
    }

    dispatch({ type: UPDATE_FILTERED_TODOS, payload: updatedTodos });
  }, [activeFilter, todos]);

  const createNewTodo = ({ todosLength, todoText, todoStatus }: CreateNewTodo): Todo => ({
    id: todosLength + 1,
    name: todoText,
    isCompleted: todoStatus
  });

  const onTodoAdd = todo => {
    const { todoText, checked } = todo;
    const newTodo = createNewTodo({ todosLength: todos.length, todoText, todoStatus: checked });
    dispatch({ type: ADD_TODO, payload: newTodo });
  };

  const onTodoStatusChange = (todoId: number) => {
    dispatch({ type: UPDATE_TODO, payload: { todoId } });
  };

  const onTodoDelete = todoId => {
    dispatch({ type: DELETE_TODO, payload: { todoId } });
  };

  const onClearCompletedTodo = () => {
    dispatch({ type: CLEAR_COMPLETED });
  };

  const leftTodosCount = _.filter(todos, ({ isCompleted }) => !isCompleted).length;

  const onFilterChange = filter => dispatch({ type: UPDATE_FILTER, payload: filter });

  const filters = useMemo(() => TodoUtils.filters);

  const value = useMemo(() => ({
    activeFilter,
    todos,
    filteredTodos,
    filters,
    leftTodosCount,
    onTodoAdd,
    onTodoStatusChange,
    onTodoDelete,
    onClearCompletedTodo,
    onFilterChange
  }));

  return (
    <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
