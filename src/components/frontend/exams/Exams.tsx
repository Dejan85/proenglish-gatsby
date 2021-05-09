import React, { useEffect, useState } from 'react';
import './styles.scss';
import { Loading } from '@/components/ui';
import axios from 'axios';
import RenderUI from './patials/RenderUI';

const request = async (setBlogData: {
  (value: (prevState: undefined) => undefined): void;
  (arg0: any): void;
}) => {
  try {
    const urlX = 'http://207.154.226.106/exams/get';
    const { data } = await axios(urlX);
    setBlogData(data);
  } catch (error) {
    console.log('test', error);
  }
};

const Exams = (): JSX.Element => {
  const [examsData, setExamsData] = useState([]);
  useEffect(() => {
    request(setExamsData);
    window.scrollTo(0, 0);
  }, []);
  return examsData.length ? (
    <RenderUI examsData={examsData} />
  ) : (
    <Loading height="100vh" />
  );
};

export default Exams;
