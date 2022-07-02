import React, { useState } from 'react';
import CustomCheckbox from './CustomCheckbox';

type Props = {
  onTodoAdd: Function
};

const TodoInput = ({ onTodoAdd }: Props) => {
  const [todoText, setTodoText] = useState('');
  const [checked, setChecked] = useState(false);

  const handleInputChange = (event: Object) => {
    setTodoText(event.target.value);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleKeyDown = event => {
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
        placeholder="Enter a todo task here..."
        type="text"
        value={todoText}
      />
    </div>
  );
};

export default TodoInput;
