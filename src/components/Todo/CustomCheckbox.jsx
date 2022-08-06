import React, { useId } from 'react';
import type { Node } from 'react';

type Props = {
  checked: boolean,
  onChange: Function
};

const CustomCheckbox = ({ checked, onChange }: Props): Node => {
  const inputId = useId();
  return (
    <label className="custom-checkbox" htmlFor={inputId}>
      <input
        aria-label='custom-checkbox'
        checked={checked}
        className="custom-checkbox__input"
        id={inputId}
        name='custom-checkbox'
        onChange={onChange}
        type="checkbox"
      />
      <span className="checkmark" />
    </label>
  );
};

export default CustomCheckbox;
