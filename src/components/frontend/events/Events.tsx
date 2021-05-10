import React, { useEffect } from 'react';
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
