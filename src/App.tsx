import React, { useState } from 'react';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';

import expenses from './utils/expenses';

import { GlobalStyle } from './styles/global';

const App = (): JSX.Element => {
  const [newExpenses, setNewExpenses] = useState(expenses);

  const addExpenseHandler = expense => {
    setNewExpenses(prevExpenses => [expense, ...prevExpenses]);
  };

  return (
    <>
      <GlobalStyle />
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={newExpenses} />
    </>
  );
};

export default App;
