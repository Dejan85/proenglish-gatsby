import React from 'react';
import { LinkPropsType } from './types';

const Link = (props: LinkPropsType): JSX.Element => {
  const { as = 'a', to, href, className: customClassName, children } = props;
  const restProps = { to, href };
  const className = 'link';

  const Wrapper = as;
  return (
    <Wrapper
      className={
        customClassName ? `${className} ${customClassName}` : className
      }
      {...restProps}
    >
      {children}
    </Wrapper>
  );
};

export default Link;
