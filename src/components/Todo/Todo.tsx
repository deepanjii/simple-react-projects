import TodoFooter from './TodoFooter';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import TodoLayout from './TodoLayout';
import TodoProvider from './TodoProvider';
import TodoThemeProvider from './TodoThemeProvider';
import { TodoUtils } from './TodoUtils';

const TodoApp = (): JSX.Element => (
  <TodoThemeProvider>
    <TodoProvider initialTodos={TodoUtils.todos}>
      <TodoLayout>
        <TodoHeader />
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </TodoLayout>
    </TodoProvider>
  </TodoThemeProvider>
);

export default TodoApp;
