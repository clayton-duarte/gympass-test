import styled from 'styled-components';
import React from 'react';

const StyledCard = styled.div`
box-shadow: 0 0 10px rgba(0,0,0,0.2);
border-left: .25rem solid #909090;
text-transform: lowercase;
font-size: 1rem;
background: #eee;
margin: .5rem 0;
padding: .5rem;
color: #222;
width: 100%;
`;

export default props => (
  <StyledCard {...props} />
);
