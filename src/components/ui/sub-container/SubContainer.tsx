import React from 'react';
import { SubContainerProps } from './types';

const className = 'sub-container';

const SubContainer = (props: SubContainerProps): JSX.Element => {
  const { children, className: customClassName, as = 'div' } = props;
  const Wrapper = as;

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

export default SubContainer;
