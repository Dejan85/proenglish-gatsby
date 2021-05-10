import React from 'react';
import { ContentContainer } from '@/components/ui';
import Scheduler from '@/widgets/scheduler/Scheduler';
import { MonthlyEventsProps } from '../types';

const MonthlyEvents = (props: MonthlyEventsProps) => {
  const {
    filteredActiveEventsDates: { filteredEvents },
    currentMonth,
  } = props;

  return (
    <ContentContainer className="events__monthly-content">
      <Scheduler events={filteredEvents} currentMonth={currentMonth} />
    </ContentContainer>
  );
};

export default MonthlyEvents;
