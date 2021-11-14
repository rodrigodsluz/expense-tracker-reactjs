import React from 'react';

import ExpenseForm from '../ExpenseForm';

import { IExpense } from '../Expenses';

import { Container } from './styles';

type Props = {
  onAddExpense: (expense: IExpense) => void;
};

const NewExpense = ({ onAddExpense }: Props): JSX.Element => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <Container>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Container>
  );
};

export default NewExpense;
