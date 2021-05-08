import React from 'react';
import { ButtonProps } from './types';

const className = 'button';
const Wrapper = 'button';

const Button = (props: ButtonProps): JSX.Element => {
  const {
    children,
    type = 'button',
    value,
    name,
    onClick,
    className: costomClassName,
    width,
    height,
    padding,
  } = props;

  const style = { width, height, padding };
  return (
    <Wrapper
      type={type}
      value={value}
      className={
        costomClassName ? `${costomClassName} ${className}` : className
      }
      name={name}
      onClick={onClick}
      style={style}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
