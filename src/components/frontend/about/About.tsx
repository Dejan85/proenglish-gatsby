import React, { useEffect, useState } from 'react';
import './styles.scss';
import axios from 'axios';
import RenderUi from './partials/UiRender';

const request = async (setBlogData: {
  (value: (prevState: undefined) => undefined): void;
  (arg0: any): void;
}): any => {
  try {
    const urlX = 'http://207.154.226.106/about/get';
    const { data } = await axios(urlX);
    setBlogData(data);
  } catch (error) {
    console.log('test', error);
  }
};

const About = (): JSX.Element => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    request(setAboutData);
  }, []);

  return <RenderUi aboutData={aboutData} />;
};

export default About;
