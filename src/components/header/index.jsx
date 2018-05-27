import styled from 'styled-components';
import React from 'react';

const StyledHeader = styled.header`
box-shadow: 0 0 10px rgba(0,0,0,0.2);
text-transform: uppercase;
text-align: center;
font-size: 1.2rem;
background: #222;
position: fixed;
padding: 1rem;
color: white;
width: 100%;
left: 0;
top:0;
`;

const Wrapper = styled.div`
padding-bottom: 3rem;
`;

export default props => (
  <Wrapper>
    <StyledHeader {...props} />
  </Wrapper>
);
