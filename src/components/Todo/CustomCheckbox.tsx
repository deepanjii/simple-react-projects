import React, { useId } from 'react';

type Props = {
  checked: boolean,
  onChange: () => void
};

const CustomCheckbox = ({ checked, onChange }: Props): JSX.Element => {
  const inputId: string = useId();
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
