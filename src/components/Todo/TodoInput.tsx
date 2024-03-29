import React, { useState } from 'react';
import type { TodoContextValue } from './types';
import CustomCheckbox from './CustomCheckbox';
import useTodo from '../../hooks/useTodo';

const TodoInput = (): JSX.Element => {
  const [todoText, setTodoText] = useState('');
  const [checked, setChecked] = useState(false);
  const { onTodoAdd }: TodoContextValue = useTodo();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setTodoText(event.target.value);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && todoText) {
      onTodoAdd({ todoText, checked });
      setTodoText('');
    }
  };

  return (
    <div className="todo__input">
      <CustomCheckbox checked={checked} onChange={handleCheckboxChange} />
      <input
        aria-label="todo-input-element"
        className="todo__input-element"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Create a new todo..."
        type="text"
        value={todoText}
      />
    </div>
  );
};

export default TodoInput;
