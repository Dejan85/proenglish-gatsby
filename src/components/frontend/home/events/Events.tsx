import React from 'react';
import './styles.scss';
import { useEventsDataHook } from '@/hooks';
import { UiRender } from './partials';

const Events = (): JSX.Element => {
  const {
    filteredActiveEventsDates,
    filteredDailyEventsData,
    generateHighlhtDates,
    generateDailyEvents,
  } = useEventsDataHook();

  return (
    <UiRender
      generateHighlhtDates={generateHighlhtDates}
      filteredActiveEventsDates={filteredActiveEventsDates}
      generateDailyEvents={generateDailyEvents}
      filteredDailyEventsData={filteredDailyEventsData}
    />
  );
};

export default Events;
