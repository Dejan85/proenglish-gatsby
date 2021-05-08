import React from 'react';
import { ListProps } from '../types';

const Wrapper = 'li';
const className = 'navigation__list responsive-navigation__list';

const List = (props: ListProps): JSX.Element => {
  const { children, onClick } = props;
  return (
    <Wrapper onClick={onClick} className={className}>
      {children}
    </Wrapper>
  );
};

export default List;
