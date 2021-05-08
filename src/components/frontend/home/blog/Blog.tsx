import React, { useEffect, useState } from 'react';
import './styles.scss';
import axios from 'axios';
import { RenderUi } from './partials';

const request = async (setBlogData: {
  (value: (prevState: undefined) => undefined): void;
  (arg0: any): void;
}): any => {
  try {
    const urlX = 'http://207.154.226.106/blog/get';
    const { data } = await axios(urlX);
    setBlogData(data);
  } catch (error) {
    console.log('test', error);
  }
};

const Blog = (): JSX.Element => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    request(setBlogData);
  }, []);

  console.log('test', blogData);

  return <RenderUi blogData={blogData} />;
};

export default Blog;
