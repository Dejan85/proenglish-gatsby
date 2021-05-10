import React, { useEffect } from 'react';
import './styles.scss';
import { useInjectSaga } from '@/utils/injectSaga';
import { useInjectReducer } from '@/utils/injectReducer';
import { useDispatch, useSelector } from 'react-redux';
import { getAboutData } from './selectors';
import { ABOUT_SCOPE } from './constants';
import { fetchAboutDataAction, reducer } from './slice';
import saga from './saga';
import RenderUi from './partials/UiRender';

const About = (): JSX.Element => {
  useInjectReducer({ key: ABOUT_SCOPE, reducer });
  useInjectSaga({ key: ABOUT_SCOPE, saga });
  const dispatch = useDispatch();
  const { aboutData } = useSelector(getAboutData);

  useEffect(() => {
    if (!aboutData.length) {
      dispatch(fetchAboutDataAction());
    }
  }, []);

  return <RenderUi aboutData={aboutData} />;
};

export default About;
