import styled, { css } from 'styled-components';

export const Container = styled.div<{
  expenses?: string;
}>`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  ${({ expenses }) =>
    (expenses === 'expenses' &&
      css`
        padding: 1rem;
        background-color: rgb(31, 31, 31);
        margin: 2rem auto;
        width: 50rem;
        max-width: 95%;
      `) ||
    (expenses === 'expense-item' &&
      css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        margin: 1rem 0;
        background-color: #4b4b4b;

        h2 {
          color: #3a3a3a;
          font-size: 1rem;
          flex: 1;
          margin: 0 1rem;
          color: white;
        }
      `)}
`;
