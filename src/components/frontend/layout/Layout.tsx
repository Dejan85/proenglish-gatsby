import React from 'react';
import { Header } from '@/components/frontend';
import { LayoutProps } from './types';
import './styles.scss';

const Layout = (props: LayoutProps): JSX.Element => {
  const { children, as = `main`, className } = props;
  const Wrapper = as;
  return (
    <Wrapper className={`layout ${className}`}>
      <Header />
      {children}
    </Wrapper>
  );
};

export default Layout;
