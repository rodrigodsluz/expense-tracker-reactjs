import React from 'react';

import { Container, Inner, Fill, Label } from './styles';

type Props = {
  value: number;
  maxValue: number;
  label: string;
};

const ChartBar = ({ maxValue, value, label }: Props): JSX.Element => {
  let barFillHeight = 0;

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100);
  }

  return (
    <Container>
      <Inner>
        <Fill newHeight={barFillHeight} />
      </Inner>
      <Label>{label}</Label>
    </Container>
  );
};

export default ChartBar;
