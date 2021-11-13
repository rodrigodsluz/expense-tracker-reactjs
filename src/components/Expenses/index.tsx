import React from 'react';

import ExpenseItem from '../ExpenseItem';
import Card from '../Card';

interface Props {
  items: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

const Expenses = ({ items }: Props): JSX.Element => (
  <Card className="expenses">
    {items.map(item => (
      <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    ))}
  </Card>
);

export default Expenses;
