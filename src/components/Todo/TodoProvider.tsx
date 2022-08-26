import _ from 'lodash';
import { useEffect, useReducer, useMemo } from 'react';
import type {
  AddTodo as AddTodoType,
  Todo
} from './types';
import TodoContext from '../../contexts/TodoContext';
import { Filters } from './TodoUtils';
import { useLocalStorage } from '../../hooks/useLocalStorage';

enum TodoActions {
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_TODO = 'DELETE_TODO',
  CLEAR_COMPLETED = 'CLEAR_COMPLETED',
  UPDATE_FILTER = 'UPDATE_FILTER',
  UPDATE_FILTERED_TODOS = 'UPDATE_FILTERED_TODOS'
}

type TodoProps = {
  children: JSX.Element | JSX.Element[],
  initialTodos: Todo[]
};

interface TodoState {
  todos: Todo[];
  filteredTodos: Todo[];
  activeFilter: string;
}

interface AddTodo {
  type: TodoActions.ADD_TODO,
  payload: Todo
}

interface DeleteTodo {
  type: TodoActions.DELETE_TODO,
  payload: number
}

interface ClearCompleted {
  type: TodoActions.CLEAR_COMPLETED,
}

interface UpdateTodo {
  type: TodoActions.UPDATE_TODO,
  payload: number
}

interface UpdateFilter {
  type: TodoActions.UPDATE_FILTER,
  payload: string
}

interface UpdateFilteredTodos {
  type: TodoActions.UPDATE_FILTERED_TODOS,
  payload: Todo[]
}

type TodoAction = AddTodo | DeleteTodo | UpdateTodo |
ClearCompleted | UpdateFilter | UpdateFilteredTodos;

const todosReducer = (state: TodoState, action: TodoAction): TodoState => {
  let index: number;
  let updatedTodos: Todo[];
  switch (action.type) {
    case TodoActions.ADD_TODO: return { ...state, todos: [...state.todos, action.payload] };

    case TodoActions.DELETE_TODO:
      return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };

    case TodoActions.CLEAR_COMPLETED:
      updatedTodos = _.filter(state.todos, ({ isCompleted }: Todo) => !isCompleted);
      return { ...state, todos: updatedTodos };

    case TodoActions.UPDATE_TODO:
      index = state.todos.findIndex(todo => todo.id === action.payload);
      updatedTodos = [
        ...state.todos.slice(0, index), // everything before current todo
        {
          ...state.todos[index],
          isCompleted: !state.todos[index].isCompleted
        },
        ...state.todos.slice(index + 1) // everything after current todo
      ];
      return { ...state, todos: updatedTodos };

    case TodoActions.UPDATE_FILTER:
      return { ...state, activeFilter: action.payload };

    case TodoActions.UPDATE_FILTERED_TODOS:
      return { ...state, filteredTodos: action.payload };

    default: return state;
  }
};

const TodoProvider = ({ children, initialTodos }: TodoProps): JSX.Element => {
  const initialState: TodoState = {
    todos: initialTodos,
    filteredTodos: initialTodos,
    activeFilter: Filters.ALL
  };
  const [todoState, setTodoState] = useLocalStorage<TodoState>('todo', initialState);
  const [
    { todos, filteredTodos, activeFilter },
    dispatch
  ] = useReducer(todosReducer, todoState);

  useEffect(() => {
    let updatedTodos: Todo[];
    switch (activeFilter) {
      case Filters.ALL:
        updatedTodos = todos; break;
      case Filters.ACTIVE:
        updatedTodos = todos.filter(todo => !todo.isCompleted);
        break;
      case Filters.COMPLETED:
        updatedTodos = todos.filter(todo => todo.isCompleted);
        break;
      default: updatedTodos = todos; break;
    }

    dispatch({ type: TodoActions.UPDATE_FILTERED_TODOS, payload: updatedTodos });
  }, [activeFilter, todos]);

  useEffect(() => {
    setTodoState({ todos, activeFilter, filteredTodos });
  }, [todos, activeFilter, filteredTodos]);

  const createNewTodo = ({ todosLength, todoText, todoStatus }:
  { todosLength: number, todoText: string, todoStatus: boolean }): Todo => ({
    id: todosLength + 1,
    name: todoText,
    isCompleted: todoStatus
  });

  const onTodoAdd = (todo: AddTodoType): void => {
    const { todoText, checked } = todo;
    const newTodo = createNewTodo({ todosLength: todos.length, todoText, todoStatus: checked });
    dispatch({ type: TodoActions.ADD_TODO, payload: newTodo });
  };

  const onTodoStatusChange = (todoId: number): void => {
    dispatch({ type: TodoActions.UPDATE_TODO, payload: todoId });
  };

  const onTodoDelete = (todoId: number): void => {
    dispatch({ type: TodoActions.DELETE_TODO, payload: todoId });
  };

  const onClearCompletedTodo = (): void => {
    dispatch({ type: TodoActions.CLEAR_COMPLETED });
  };

  const leftTodosCount: number = useMemo(() => (
    _.filter(todos, ({ isCompleted }: Todo) => !isCompleted).length), [todos]);

  const onFilterChange = (filter: string) => dispatch({
    type: TodoActions.UPDATE_FILTER,
    payload: filter
  });

  const filters = useMemo(() => Filters, []);

  const value = useMemo(() => ({
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
  }), [todos, activeFilter, filteredTodos]);

  return (
    <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
