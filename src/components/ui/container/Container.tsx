import React from 'react';
import { ContainerProps } from './types';
import './styles.scss';

const Container = (props: ContainerProps): JSX.Element => {
  const { children, as = 'div', className, width = '120rem' } = props;
  const Wrapper = as;
  return (
    <Wrapper
      style={{ maxWidth: width }}
      className={className ? `container ${className}` : 'container'}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
