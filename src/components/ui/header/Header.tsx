import React from 'react';
import { HeaderProps } from './types';

const Wrapper = 'header';
const className = 'header';

const Header = (props: HeaderProps): JSX.Element => {
  const { children } = props;
  return <Wrapper className={className}>{children}</Wrapper>;
};

export default Header;
