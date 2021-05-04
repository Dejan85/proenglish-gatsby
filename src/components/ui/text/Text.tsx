import React from 'react';
import { TextProps } from './types';

const Text = (props: TextProps): JSX.Element => {
  const { children, as = 'p', className } = props;
  const Wrapper = as;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Text;
