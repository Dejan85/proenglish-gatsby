import React from 'react';
import { InputProps } from './types';

const Wrapper = 'input';
const className = 'input';

const Input = (props: InputProps): JSX.Element => {
  const {
    className: costomClassName,
    placeholder,
    value,
    type,
    name,
    width,
    height,
    padding,
    onChange,
  } = props;

  const style = { width, height, padding };

  return (
    <Wrapper
      placeholder={placeholder}
      value={value}
      type={type}
      name={name}
      onChange={onChange}
      className={
        costomClassName ? `${costomClassName} ${className}` : className
      }
      style={style}
    />
  );
};

export default Input;
