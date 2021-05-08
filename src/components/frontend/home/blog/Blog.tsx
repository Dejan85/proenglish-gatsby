import React, { useEffect, useState } from 'react';
import './styles.scss';
import { RenderUi } from './partials';
import axios from 'axios';

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

  // return <RenderUi blogData={blogData} />;

  return <div>test</div>;
};

export default Blog;
