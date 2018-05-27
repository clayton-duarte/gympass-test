import { string, node } from 'prop-types';
import React from 'react';

import StyledFieldset from './styledFieldset';
import StyledInput from './styledInput';
import StyledLabel from './styledLabel';

const Input = (props) => {
  const { label, children, ...other } = props;
  return (
    <StyledFieldset>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...other} />
      {children}
    </StyledFieldset>
  );
};

Input.propTypes = {
  children: node,
  label: string,
};

Input.defaultProps = {
  label: 'Informe um usuário:',
  children: null,
};

export default Input;
