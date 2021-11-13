import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-bg: #3f3f3f;
  }

  * {
      font-family: 'Noto Sans JP', sans-serif;
      box-sizing: border-box;
  }


  body {
      margin: 0;

      background-color: var(--color-bg);
  }
`;
