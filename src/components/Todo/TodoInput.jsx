import React, { useState } from 'react';
import CustomCheckbox from './CustomCheckbox';

const TodoInput = () => {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChange = (event: Object) => {
    setValue(event.target.value);
  };

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="todo__input">
      <CustomCheckbox checked={checked} onChange={handleCheckboxChange} />
      <input
        aria-label="todo-input-element"
        className="todo__input-element"
        onChange={handleChange}
        placeholder="Enter a todo task here..."
        type="text"
        value={value}
      />
    </div>
  );
};

export default TodoInput;
