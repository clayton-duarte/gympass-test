import styled from 'styled-components';
import React from 'react';

const StyledButton = styled.button`
box-shadow: 0 0 5px rgba(0,0,0,0.2);
text-transform: uppercase;
background: #909090;
font-weight: bold;
font-size: .8rem;
padding: .25rem;
color: white;
width: 100%;
border: 0;
`;

const Button = props => <StyledButton {...props} />;

Button.defaultProps = {
  children: 'Buscar Repositórios',
};

export default Button;
