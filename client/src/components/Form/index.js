import React, { useReducer } from "react";
import { FormGroup } from "..";

const Form = ({ schema: { id, fields = [], formHeading, submitText } = {}, handleSubmit }) => {
  const initialState = fields.reduce((acc, field) => {
    acc[field.id] = field.multiSelect ? [] : String();
    return acc;
  }, {});
  const formReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(formReducer, initialState);
  const handleInputChange = ({ id, value }) => setState({ [id]: value });
  const handleUpload = _ => console.log('backend image storage still in progress!')
  const onSubmit = e => {
    e.preventDefault();
    handleSubmit(state);
  };
  return (
    <form onSubmit={onSubmit} id={id}>
      <h1 className="display-4 m-b-2">{formHeading}</h1>
      {fields.map(field => (
        <FormGroup {...field} onUpload={handleUpload} onChange={handleInputChange} value={state[field.id]} />
      ))}
      <button className="btn btn-primary" type="submit">
        {submitText}
      </button>
    </form>
  );
};

export default Form;
