import React, { useEffect } from 'react';
import './styles.scss';
import { Loading } from '@/components/ui';
import { useInjectReducer } from '@/utils/injectReducer';
import { useInjectSaga } from '@/utils/injectSaga';
import { useDispatch, useSelector } from 'react-redux';
import { getExamsData } from './selectors';
import { EXAMS_SCOPE } from './contants';
import { fetchExamsData, reducer } from './slice';
import saga from './saga';
import RenderUI from './patials/RenderUI';

const Exams = (): JSX.Element => {
  useInjectReducer({ key: EXAMS_SCOPE, reducer });
  useInjectSaga({ key: EXAMS_SCOPE, saga });
  const dispatch = useDispatch();
  const { examsData } = useSelector(getExamsData);

  useEffect(() => {
    dispatch(fetchExamsData());
  }, []);
  return examsData.length ? (
    <RenderUI examsData={examsData} />
  ) : (
    <Loading height="100vh" />
  );
};

export default Exams;
