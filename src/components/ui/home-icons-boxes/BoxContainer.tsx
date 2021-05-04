import React from 'react';
import { BoxContainer } from './types';

const className = 'box-container';
const Wrapper = 'div';

function BoxContainer(props: BoxContainer) {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
}

export default BoxContainer;
