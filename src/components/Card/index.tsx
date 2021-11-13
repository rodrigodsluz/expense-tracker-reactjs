import React from 'react';

import { Container } from './styles';

type Props = {
  className: string;
  children: React.ReactNode;
};

const Card = ({ className, children }: Props): JSX.Element => (
  <Container expenses={className}>{children}</Container>
);

export default Card;
