import styled from 'styled-components';

export default styled.aside`
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
