import { string, node } from 'prop-types';
import styled from 'styled-components';
import React from 'react';

const StyledFieldset = styled.fieldset`
border: 1px solid #909090;
position: relative;
background: #eee;
margin: .5rem;
padding: 1rem;
`;

const StyledInput = styled.input`
box-shadow: 0 0 5px rgba(0,0,0,0.2);
transition: .3s ease;
padding: .25rem;
font-size: 1rem;
width: 100%;
border: 0;
&:focus, &:valid {
  margin-top: 1.5rem;
}
`;

const StyledLabel = styled.span`
text-transform: uppercase;
pointer-events: none;
position: absolute;
font-weight: bold;
font-size: .6rem;
left: 1.5rem;
top: 1.5rem;
color: #222;
`;

const Input = (props) => {
  const { label, children, ...other } = props;
  return (
    <StyledFieldset>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput required {...other} />
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
