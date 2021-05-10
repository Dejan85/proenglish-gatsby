import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from '@/redux/configureStore';
import './styles.scss';
import Header from '../header';
import Footer from '../footer/Footer';

import { LayoutProps } from './types';

const initialState = {};
const store = configureStore(initialState);

const Layout = (props: LayoutProps): JSX.Element => {
  const { children, as = 'main', className } = props;
  const Wrapper = as;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Provider store={store}>
      <Wrapper className={className ? `layout ${className}` : 'layout'}>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </Provider>
  );
};

export default Layout;
