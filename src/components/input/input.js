import React from 'react';
import * as StyleInput from './style';

const Input = ({ type, placeholder, value, onChange }) => {
  return <StyleInput.Input 
    id="input"
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
  />;
};

export default Input;