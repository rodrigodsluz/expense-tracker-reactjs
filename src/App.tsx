import React from 'react';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

import expenses from './utils/expenses';

import { GlobalStyle } from './styles/global';

const App = (): JSX.Element => {
  const addExpenseHandler = expense => {
    console.log(expense);
  };

  return (
    <>
      <GlobalStyle />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
