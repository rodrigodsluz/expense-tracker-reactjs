import React, { useState } from 'react';

import ExpensesFilter from '../ExpenseFilter';
import ExpensesList from '../ExpensesList';
import ExpensesChart from '../ExpensesChart';
import Card from '../Card';

export type IExpense = {
  items: {
    id: string;
    title: string;
    amount: number;
    date: Date;
  }[];
};

const Expenses = ({ items }: IExpense): JSX.Element => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter(
    expense => expense.date.getFullYear().toString() === filteredYear,
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
