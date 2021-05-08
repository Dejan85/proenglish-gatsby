import React from 'react';
import List from './List';
import Section from './Section';
import Heading from './Heading';
import { FooterContainerProps } from './types';

const Wrapper = 'div';

const FooterContainer = (props: FooterContainerProps): JSX.Element => {
  const { children } = props;
  return <Wrapper className="footer-container">{children}</Wrapper>;
};

FooterContainer.List = List;
FooterContainer.Section = Section;
FooterContainer.Heading = Heading;

export default FooterContainer;
