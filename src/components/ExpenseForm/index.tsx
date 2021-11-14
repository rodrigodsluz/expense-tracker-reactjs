/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';

import { IExtenseItem } from '../ExpenseItem';

import {
  NewExpenseControls,
  NewExpenseControl,
  NewExpenseActions,
} from './styles';

type Props = {
  onSaveExpenseData: (enteredExpenseData: IExtenseItem) => void;
  onCancel: () => void;
};

const ExpenseForm = ({ onSaveExpenseData, onCancel }: Props): JSX.Element => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = event => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <NewExpenseControls>
        <NewExpenseControl>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </NewExpenseControl>
        <NewExpenseControl>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </NewExpenseControl>
        <NewExpenseControl>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </NewExpenseControl>
      </NewExpenseControls>
      <NewExpenseActions>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </NewExpenseActions>
    </form>
  );
};

export default ExpenseForm;
