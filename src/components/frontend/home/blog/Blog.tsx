import React, { useEffect, useState } from 'react';
import './styles.scss';
import RenderUi from './partials/RenderUi';
import axios from 'axios';

const request = async (setBlogData): any => {
  try {
    const urlX = 'http://207.154.226.106/blog/get';
    const { data } = await axios(urlX);

    setBlogData(data);
  } catch (error) {
    console.log('test', error);
  }
};

const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  console.log('test', blogData);

  useEffect(() => {
    request(setBlogData);
  }, []);

  // return <RenderUi blogData={blogData} />;

  return <div>test</div>;
};

export default Blog;
