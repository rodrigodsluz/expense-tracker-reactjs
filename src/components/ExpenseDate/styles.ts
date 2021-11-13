import styled, { css } from 'styled-components';

const fontSize = css`
  font-size: 0.75rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;

  div:first-child {
    ${fontSize}
    font-weight: bold;
  }

  div:nth-child(2) {
    ${fontSize}
    font-size: 0.75rem;
  }

  div:nth-child(3) {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
