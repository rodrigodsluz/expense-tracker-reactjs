import React from 'react';

import ExpenseItem from '../ExpenseItem';
import { IExpense } from '../Expenses';

import { Container, Fallback } from './styles';

const ExpensesList = ({ items }: IExpense): JSX.Element => {
  if (items.length === 0) {
    return <Fallback>Found no expenses.</Fallback>;
  }

  return (
    <Container>
      {items.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Container>
  );
};

export default ExpensesList;
