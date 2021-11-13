import React from 'react';

import { Container } from './styles';

interface Props {
  date: Date;
}

const ExpenseDate = ({ date }: Props): JSX.Element => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <Container>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </Container>
  );
};

export default ExpenseDate;
