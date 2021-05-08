import React from 'react';
import { SectionProps } from './types';

const Wrapper = 'div';

const Section = (props: SectionProps): JSX.Element => {
  const { children, width } = props;

  const style = { width };

  return (
    <Wrapper style={style} className="footer-container__section">
      {children}
    </Wrapper>
  );
};

export default Section;
