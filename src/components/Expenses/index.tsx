import React, { useState } from 'react';

import ExpenseItem from '../ExpenseItem';
import ExpensesFilter from '../ExpenseFilter';
import Card from '../Card';

export interface IExpense {
  items: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
}

const Expenses = ({ items }: IExpense): JSX.Element => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {items.map(item => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
