import React from 'react';
import { HeadingProps } from './types';

const Heading = (props: HeadingProps): JSX.Element => {
  const { children, as = 'h1', className } = props;
  const Wrapper = as;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Heading;
