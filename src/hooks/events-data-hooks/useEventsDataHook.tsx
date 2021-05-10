import { useEffect } from 'react';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterEventsForCurrentMonth,
  filterEventsForCurrentDay,
} from '@/utils/timeAndDateHandlers';
import { getEventsState } from './selectos';
import { EVENTS_SCOPE } from './constants';
import {
  reducer,
  fetchEventsData,
  filterEventsAction,
  filterDailyEventsAction,
} from './slice';
import saga from './saga';

const useEventsDataHook = () => {
  useInjectReducer({ key: EVENTS_SCOPE, reducer });
  useInjectSaga({ key: EVENTS_SCOPE, saga });
  const dispatch = useDispatch();
  const {
    eventsData,
    filteredActiveEventsDates,
    filteredDailyEventsData,
  } = useSelector(getEventsState);

  const generateHighlhtDates = (value: Date): void => {
    const filteredEvents = filterEventsForCurrentMonth(eventsData, value);
    const fullYear: number = value.getFullYear();
    const month: number = value.getMonth();
    const highlightDates: Date[] = filteredEvents.map((item) => {
      const { date } = item;
      return new Date(Number(fullYear), month, Number(date.slice(0, 2)));
    });
    const filteredMontlyEvents = { filteredEvents, highlightDates };
    dispatch(filterEventsAction(filteredMontlyEvents));
  };

  const generateDailyEvents = (date?: Date | undefined) => {
    const { filteredEvents } = filteredActiveEventsDates;
    const dailyEvents = filterEventsForCurrentDay(date, filteredEvents);
    dispatch(filterDailyEventsAction(dailyEvents));
  };

  useEffect(() => {
    generateDailyEvents();
  }, [filteredActiveEventsDates]);

  useEffect(() => {
    generateHighlhtDates(new Date());
  }, [eventsData]);

  useEffect(() => {
    if (!eventsData.length) {
      dispatch(fetchEventsData());
      generateHighlhtDates(new Date());
    }
  }, []);

  return {
    eventsData,
    filteredActiveEventsDates,
    filteredDailyEventsData,
    generateHighlhtDates,
    generateDailyEvents,
  };
};

export default useEventsDataHook;
