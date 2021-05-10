import React from 'react';

const Wrapper = 'div';
const Heading = 'p';
const Time = 'div';
const Text = 'p';
const className = 'calendar-description';

const Description = (props: { time: string; title: string }): JSX.Element => {
  const { time, title } = props;

  return (
    <Wrapper className={className}>
      <Heading className="calendar-description__heading">{title}</Heading>
      <Time className="calendar-description__time">
        <Text className="calendar-description__text">{time}</Text>
      </Time>
    </Wrapper>
  );
};

export default Description;
