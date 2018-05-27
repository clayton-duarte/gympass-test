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
`;

const BackButton = styled.button`
position: absolute;
font-size: 1rem;
margin: 0 .5rem;
color: #fff;
left: 0;
`;

const Wrapper = styled.div`
padding-bottom: 3rem;
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
