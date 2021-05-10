import React from 'react';
import { CalendarCardProps } from './types';
import Info from './Info';
import Card from './Card';
import Description from './Description';
import Content from './Content';

const Wrapper = 'div';
const className = 'calendar-info';

const CalendarInfo = (props: CalendarCardProps): JSX.Element => {
  const { children, className: customClassName } = props;

  return (
    <Wrapper
      className={
        customClassName ? `${customClassName} ${className}` : className
      }
    >
      {children}
    </Wrapper>
  );
};

CalendarInfo.Card = Card;
CalendarInfo.Info = Info;
CalendarInfo.Description = Description;
CalendarInfo.Content = Content;

export default CalendarInfo;
