import React from 'react';
import { BoxContainer } from './types';

const className = 'box-container';
const Wrapper = 'div';

const BoxContainer = (props: BoxContainer): JSX.Element => {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default BoxContainer;
