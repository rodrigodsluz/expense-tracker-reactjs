import React from 'react';

import Expenses from './components/Expenses';

import expenses from './utils/expenses';

import { GlobalStyle } from './styles/global';

const App = (): JSX.Element => (
  <>
    <GlobalStyle />
    <h2>Lets get started!</h2>
    <Expenses items={expenses} />
  </>
);

export default App;
