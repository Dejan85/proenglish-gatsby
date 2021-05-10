import React from 'react';

const Wrapper = 'div';
const className = 'calendar-card';

const Card = (props): JSX.Element => {
  const { date } = props;

  return (
    <Wrapper className={className}>
      <Wrapper className="calendar-card__num">{date.slice(0, 2)}</Wrapper>
      <Wrapper className="calendar-card__month">{date.split(' ')[1]}</Wrapper>
    </Wrapper>
  );
};

export default Card;
