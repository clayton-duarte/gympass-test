import styled from 'styled-components';
import React from 'react';

const StyledLoader = styled.aside`
@keyframes loader {
  from: {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.5) rotate(180deg);
  }
  to: {
    transform: scale(1) rotate(360deg);
  }
}
svg {
  animation: loader 2s infinite ease;
  max-width: 420px;
  height: auto;
  width: 33vw;
}
justify-content: space-around;
align-items: center;
position: absolute;
background: #333;
display: flex;
bottom: 0;
right: 0;
left: 0;
top: 0;
`;

const Loader = () => (
  <StyledLoader>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="none" d="M0 0h24v24H0V0z" />
      <path fill="#fff" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  </StyledLoader>
);

export default Loader;
