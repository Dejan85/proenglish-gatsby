/* eslint-disable react/require-default-props */
import React from 'react';

interface SubStrProps {
  children: string;
  from?: number;
  to?: number;
}

export const SubStr = (props: SubStrProps): JSX.Element => {
  const { children, from = 0, to = 170 } = props;
  const FormatedString = children.substr(from, to);
  return <>{FormatedString}...</>;
};
