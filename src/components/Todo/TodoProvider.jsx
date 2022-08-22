/* @flow */
import _ from 'lodash';
import React, { useEffect, useReducer, useMemo } from 'react';
import type { Node } from 'react';
import type {
  CreateNewTodo,
  Todo,
  Todos,
  TodoContextValue
} from './types';
import TodoContext from '../../contexts/TodoContext';
import TodoUtils from './TodoUtils';
import useLocalStorage from '../../hooks/useLocalStorage';

const ADD_TODO = 'ADD_TODO';
const UPDATE_TODO = 'UPDATE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

const UPDATE_FILTER = 'UPDATE_FILTER';
const UPDATE_FILTERED_TODOS = 'UPDATE_FILTERED_TODOS';

type Props = {
  children: Node,
  initialTodos: Todos
};

type TodoState = {
  todos: Todos,
  filteredTodos: Todos,
  activeFilter: string
};

type TodoAction = {
  type: string,
  payload?: string | number | Object
}

const todosReducer = (state: TodoState, action: TodoAction) => {
  let index: number;
  let updatedTodos: Todos;
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

const TodoProvider = ({ children, initialTodos }: Props): Node => {
  const initialState: TodoState = {
    todos: initialTodos,
    filteredTodos: initialTodos,
    activeFilter: TodoUtils.filters.ALL
  };
  const [todoState, setTodoState] = useLocalStorage('todo', initialState);
  const [
    { todos, activeFilter, filteredTodos },
    dispatch
  ]: [TodoState, Function] = useReducer(todosReducer, todoState);

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

  useEffect(() => {
    setTodoState({ todos, activeFilter, filteredTodos });
  }, [todos, activeFilter, filteredTodos]);

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

  const leftTodosCount: number = useMemo(() => (
    _.filter(todos, ({ isCompleted }) => !isCompleted).length), [todos]);

  const onFilterChange = (filter: string) => dispatch({ type: UPDATE_FILTER, payload: filter });

  const filters = useMemo(() => TodoUtils.filters, []);

  const value: TodoContextValue = useMemo(() => ({
    activeFilter,
    filteredTodos,
    filters,
    leftTodosCount,
    todos,
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
