import React from 'react';
import { ContentContainer, Heading } from '@/components/ui';
import { CalendarOfEventsWidget } from '@/widgets';
import { UiRenderProps } from '../types';

const CalendarOfEvents = (props: UiRenderProps): JSX.Element => {
  const {
    generateHighlhtDates,
    filteredActiveEventsDates,
    generateDailyEvents,
  } = props;

  const { highlightDates } = filteredActiveEventsDates;

  return (
    <ContentContainer className="home-events__calendar">
      <Heading className="home-events__calendar-heading" as="h2">
        Kalendar događaja
      </Heading>
      <ContentContainer className="home-events__content-container">
        <CalendarOfEventsWidget
          highlightDates={highlightDates}
          generateHighlhtDates={generateHighlhtDates}
          generateDailyEvents={generateDailyEvents}
          inline
        />
      </ContentContainer>
    </ContentContainer>
  );
};

export default CalendarOfEvents;
