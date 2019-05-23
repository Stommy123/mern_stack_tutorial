import React from 'react';
import { Input, InputDropdown, InputGroup } from './Widgets';
const FormGroup = props => {
  const Component = {
    input: Input,
    dropdown: InputDropdown,
    group: InputGroup
  }[props.widget] 
  return (
    <div className="form-group">
      <Component {...props} />
    </div>
  )
}


export default FormGroup;
