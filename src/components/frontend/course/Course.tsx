import React, { useEffect } from 'react';
import RenderUi from './partials/RenderUi';
import './styles.scss';

const Course = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RenderUi />;
};

export default Course;
