import React from 'react';
import SmallLine from './SmallLine';
import LargeLine from './LargeLine';
import { LineProps } from './types';

const Wrapper = 'div';
const className = 'line';

const Line = (props: LineProps): JSX.Element => {
  const { children, className: customClassName } = props;
  return (
    <Wrapper
      className={
        customClassName ? `${className} ${customClassName}` : className
      }
    >
      {children}
    </Wrapper>
  );
};

Line.SmallLine = SmallLine;
Line.LargeLine = LargeLine;

export default Line;
