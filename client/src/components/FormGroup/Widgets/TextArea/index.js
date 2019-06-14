import React from 'react';
import classNames from 'classnames';

const TextArea = ({
  label,
  placeholder,
  id,
  value,
  onChange,
  required,
  classes,
  readOnly,
  rows,
  cols
}) => (
  <>
    <label>{label}</label>
    <textarea
      id={id}
      className={classNames('form-control', ...classes)}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={e => onChange({ id, value: e.target.value })}
      readOnly={readOnly}
      rows={rows}
      cols={cols}
    />
  </>
);

export default TextArea;