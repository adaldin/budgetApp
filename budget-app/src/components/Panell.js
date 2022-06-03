import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}`;

const Panell = styled.div`
  width: min-content;
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  opacity: 0.8;
  animation: ${fadeIn} 0.5s ease-in;
  gap: 0.5rem;
`;

export default Panell;
