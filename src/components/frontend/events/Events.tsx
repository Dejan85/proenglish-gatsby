import React from 'react';
import useEventsDataHook from '@/hooks/events-data-hooks/useEventsDataHook';
import RenderUi from './partials/RenderUi';

const Events = (): JSX.Element => {
  const {
    filteredActiveEventsDates,
    filteredDailyEventsData,
    generateHighlhtDates,
    generateDailyEvents,
    eventsData,
  } = useEventsDataHook();

  return (
    <RenderUi
      eventsData={eventsData}
      generateHighlhtDates={generateHighlhtDates}
      filteredActiveEventsDates={filteredActiveEventsDates}
      generateDailyEvents={generateDailyEvents}
      filteredDailyEventsData={filteredDailyEventsData}
    />
  );
};

export default Events;
