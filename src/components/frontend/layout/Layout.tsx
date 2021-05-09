import React from 'react';
import { LayoutProps } from './types';
import './styles.scss';
import Header from '../header';
import Footer from '../footer/Footer';

const Layout = (props: LayoutProps): JSX.Element => {
  const { children, as = 'main', className } = props;
  const Wrapper = as;
  return (
    <Wrapper className={className ? `layout ${className}` : 'layout'}>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Layout;
