import React from 'react';

import ChartBar from '../ChartBar';

import { Container } from './styles';

type Props = {
  dataPoints: { label: string; value: number }[];
};

const Chart = ({ dataPoints }: Props): JSX.Element => {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <Container>
      {dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </Container>
  );
};

export default Chart;
