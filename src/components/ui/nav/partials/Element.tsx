import React from 'react';
import { UlProps } from '../types';

export const Element = (props: UlProps): JSX.Element => {
  const { children, className, as } = props;
  const Wrapper = as;
  return <Wrapper className={className}>{children}</Wrapper>;
};
