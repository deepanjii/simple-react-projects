import TodoUtils from '../TodoUtils';

describe('TodoUtils', () => {
  const todos = [
    {
      id: 1,
      name: 'Finish project 1',
      isCompleted: true
    },
    {
      id: 2,
      name: 'Finish UTs for project 1',
      isCompleted: false
    }
  ];

  test('should create new todo', () => {
    const newTodo = TodoUtils.createNewTodo({ todosLength: todos.length, todoText: 'new todo', todoStatus: false });
    expect(newTodo).toEqual({ id: 3, name: 'new todo', isCompleted: false });
  });

  test('should add new todo', () => {
    const updatedTodos = TodoUtils.addNewTodo({ todos, todoText: 'new todo', todoStatus: false });
    expect(updatedTodos.length).toEqual(3);
    expect(updatedTodos[2]).toEqual({ id: 3, name: 'new todo', isCompleted: false });
  });

  test('should update todo status', () => {
    const updatedTodos = TodoUtils.updateTodoStatus({ todos, todoId: 1 });
    expect(updatedTodos[0]).toEqual({ ...updatedTodos[0], isCompleted: false });
  });

  test('should delete todo', () => {
    const updatedTodos = TodoUtils.deleteTodo({ todos, todoId: 1 });
    expect(updatedTodos[0]).not.toEqual({
      id: 1,
      name: 'Finish project 1',
      isCompleted: true
    });
    expect(updatedTodos.length).toEqual(1);
  });

  test('should return incomplete todos count', () => {
    const incompleteTodosCount = TodoUtils.getIncompleteTodosCount({ todos });
    expect(incompleteTodosCount).toEqual(1);
  });
});
