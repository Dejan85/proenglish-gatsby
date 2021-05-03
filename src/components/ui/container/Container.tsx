import React from 'react';
import { ContainerProps } from './types';
import './styles.scss';

const Container = (props: ContainerProps): JSX.Element => {
  const { children, as = `div`, className } = props;
  const Wrapper = as;
  return <Wrapper className={`container ${className}`}>{children}</Wrapper>;
};

export default Container;
