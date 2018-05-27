import styled from 'styled-components';
import { node } from 'prop-types';
import Router from 'next/router';
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
@media only screen and (min-width: 1024px) {
  height: 100vh;
  width: 30%;
}
`;

const BackButton = styled.button`
background: transparent;
position: absolute;
font-size: 1rem;
margin: 0 .5rem;
color: #fff;
border: 0;
left: 0;
`;

const Wrapper = styled.div`
padding-bottom: 3rem;
@media only screen and (min-width: 1024px) {
padding-bottom: 0;  
}
`;

const Header = props => (
  <Wrapper>
    <StyledHeader {...props}>
      <BackButton onClick={() => Router.push('/')}>&larr;</BackButton>
      {props.children}
    </StyledHeader>
  </Wrapper>
);

Header.propTypes = {
  children: node.isRequired,
};

export default Header;
