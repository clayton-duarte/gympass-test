import React from 'react';

import StyledButton from './styled';

const Button = props => <StyledButton {...props} />;

Button.defaultProps = {
  children: 'Buscar Repositórios',
};

export default Button;
