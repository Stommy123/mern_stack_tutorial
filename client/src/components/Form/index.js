import React, { useReducer } from 'react';
import { FormGroup } from '..';

const Form = ({ isUpdate, updateSchema, schema: { id, fields = [], formHeading, submitText } = {}, handleSubmit }) => {
  const schema = isUpdate ? updateSchema : fields;
  const initialState = schema.reduce((acc, field) => {
    acc[field.id] = String();
    return acc;
  }, {});
  const formReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(formReducer, initialState);
  const handleInputChange = ({ id, value }) => setState({ [id]: value });
  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(state);
  };
  return (
    <form onSubmit={onSubmit} id={id}>
      <h1 className="display-4 m-b-2">{formHeading}</h1>
      {fields.map(({ label, type, id, placeholder, required, group = [], widget, defaultValue }) => (
        <FormGroup
          defaultValue={defaultValue}
          widget={widget}
          group={group}
          key={id}
          label={label}
          type={type}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={handleInputChange}
          value={state[id]}
        />
      ))}
      <button className="btn btn-primary" type="submit">
        {submitText}
      </button>
    </form>
  );
};

export default Form;
