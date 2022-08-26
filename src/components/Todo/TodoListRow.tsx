type Props = {
  children: JSX.Element | JSX.Element[]
};

const TodoListRow = ({ children }: Props): JSX.Element => (
  <div className="todo-list__row">{children}</div>
);

export default TodoListRow;
