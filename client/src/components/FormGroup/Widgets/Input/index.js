import React from 'react';
import classNames from 'classnames';

const Input = ({ type, label, placeholder, id, value, onChange, required, classes = [], defaultValue, defaultChecked, isChecked }) => (
  <>
    <label>{label}</label>
    <input
      id={id}
      className={classNames('form-control', ...classes)}
      required={required}
      type={type}
      checked={type === ('radio' || 'checkbox') && isChecked}
      defaultChecked={type === ('radio' || 'checkbox') && defaultChecked}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange({ id, value: e.target.value })}
      defaultValue={defaultValue}
    />
  </>
)

export default Input;