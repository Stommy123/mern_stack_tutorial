import React from 'react';
import classNames from 'classnames';

const InputDropdown = ({ type, label, placeholder, id, value, onChange, required, classes = [], defaultValue, options = [] }) => (
  <>
    <label>{label}</label>
    <select 
      id={id}
      defaultValue={defaultValue} 
      onChange={e => onChange({ id, value: e.target.value })}
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      classes={classNames('form-control', ...classes)}
    >
      {options.map(({ id, display, value, classes = [] }) => <div id={id} className={classNames(...classes)} value={value}>{display}</div>)}
    </select>
  </>
)

export default InputDropdown;