import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import {
  WelcomePage,
  HomeAbout,
  HomeCourse,
  HomeBlog,
  HomeEvents,
  Newsletter,
  Experience,
} from '@/components/frontend';

const Home: React.FC<PageProps> = (): JSX.Element => (
  <>
    <WelcomePage />
    <HomeAbout />
    <HomeCourse />
    <HomeBlog />
    <HomeEvents />
    <Newsletter />
    <Experience />
  </>
);

export default Home;
