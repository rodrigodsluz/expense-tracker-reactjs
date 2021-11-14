import React, { useState } from 'react';

import ExpenseForm from '../ExpenseForm';

import { IExpense } from '../Expenses';

import { Container } from './styles';

type Props = {
  onAddExpense: (expense: IExpense) => void;
};

const NewExpense = ({ onAddExpense }: Props): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <Container>
      {!isEditing && (
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Container>
  );
};

export default NewExpense;
