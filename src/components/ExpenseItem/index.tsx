import React from 'react';

import ExpenseDate from '../ExpenseDate';
import Card from '../Card';

import { ExpenseItemDescription, ExpenseItemPrice } from './styles';

export interface IExtenseItem {
  date: Date;
  title: string;
  amount: number;
}

const ExpenseItem = ({ date, title, amount }: IExtenseItem): JSX.Element => (
  <Card className="expense-item">
    <ExpenseDate date={date} />
    <ExpenseItemDescription>
      <h2>{title}</h2>
      <ExpenseItemPrice>${amount}</ExpenseItemPrice>
    </ExpenseItemDescription>
  </Card>
);

export default ExpenseItem;
