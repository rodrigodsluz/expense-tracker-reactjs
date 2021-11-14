/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import { Container, ExpensesFilterControl } from './styles';

type Props = {
  onChangeFilter: (selectedYear: string) => void;
  selected: string;
};

const ExpensesFilter = ({ onChangeFilter, selected }: Props): JSX.Element => {
  const dropdownChangeHandler = event => {
    onChangeFilter(event.target.value);
  };

  return (
    <Container>
      <ExpensesFilterControl>
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </ExpensesFilterControl>
    </Container>
  );
};

export default ExpensesFilter;
