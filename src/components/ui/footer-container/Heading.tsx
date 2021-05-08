import React from 'react';
import { HeadingProps } from './types';

const Wrapper = 'div';

const Heading = (props: HeadingProps): JSX.Element => {
  const { children } = props;
  return <Wrapper className="footer-container__heading">{children}</Wrapper>;
};

export default Heading;
