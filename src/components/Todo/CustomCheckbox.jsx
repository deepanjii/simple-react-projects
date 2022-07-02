import React from 'react';
import type { Node } from 'react';

type Props = {
  checked: boolean,
  onChange: Function,
  role: string
};

const CustomCheckbox = ({ checked, onChange, role }: Props): Node => (
  <label className="custom-checkbox">
    <input
      checked={checked}
      className="custom-checkbox__input"
      onChange={onChange}
      type="checkbox"
      role={role}
    />
    <span className="checkmark" />
  </label>
);

export default CustomCheckbox;
