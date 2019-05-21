import React from 'react';

const FormGroup = ({ type, label, placeholder, id, value, onChange, required }) => (
  <div className="form-group">
    {console.log('id', id)}
    <label>{label}</label>
    <input
      id={id}
      className="form-control"
      required={required}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange(id)}
    />
  </div>
);

export default FormGroup;
