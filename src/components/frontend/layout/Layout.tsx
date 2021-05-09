import React from 'react';
import { LayoutProps } from './types';
import './styles.scss';
import Header from '../header';

const Layout = (props: LayoutProps): JSX.Element => {
  const { children, as = 'main', className } = props;
  const Wrapper = as;
  console.log('test', 'radi');

  return (
    <Wrapper className={className ? `layout ${className}` : 'layout'}>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
