import React from 'react';
import { LabelProps } from './types';

const Wrapper = 'label';

const Label = (props: LabelProps): JSX.Element => {
  const { children, className, htmlFor } = props;
  return (
    <Wrapper htmlFor={htmlFor} className={className}>
      {children}
    </Wrapper>
  );
};

export default Label;
