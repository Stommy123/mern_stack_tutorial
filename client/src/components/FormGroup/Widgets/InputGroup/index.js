import React, { useReducer } from 'react';
import Input from '../..';

const InputGroup = ({ type, label, onChange, classes = [], defaultValue, group = [], multiSelect }) => {
  const initialState = { selected: defaultValue, selections: [] }
  const radioGroupReducer = (state, payload) => ({ ...state, ...payload });
  const [state, setState] = useReducer(radioGroupReducer, initialState);
  const { selected, selections } = state;
  const handleSelect = ({ id, value }) =>  {
    let newSelection = selections;
    if (multiSelect) {
      const alreadySelected = selections.includes(id);
      if (alreadySelected) newSelection = selections.filter(el => el !== id)
      else newSelection.push(id)
    }
    setState({ ...state, selected: id, ...(multiSelect && {  selections: newSelection }) })
    onChange && onChange({ id, value: multiSelect ? newSelection : value })
  }
  return (
    <div>
      <label>{label}</label>
      {group.map(({ display, value, id, defaultChecked }) => (
        <Input
          label={display}
          value={value}
          id={id}
          defaultChecked={multiSelect ?  selections.includes(id) : defaultChecked}
          onChange={handleSelect}
          isChecked={multiSelect ? selections.includes(id) : selected === id}
          type={type}
          classes={classes}
        />
      ))}
    </div>
  )
}

export default InputGroup;