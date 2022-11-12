import React from 'react';
import * as StyleButton from './styles';

const Button = ({ Text, onClick, Type = 'button' }) => {
  return (
    <StyleButton.Button id='button' type={Type} onClick={onClick}>
      {Text}
    </StyleButton.Button>
  );
};

export default Button;
