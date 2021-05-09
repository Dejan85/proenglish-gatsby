import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import {
  WelcomePage,
  HomeAbout,
  Course,
  Blog,
  Newsletter,
  Experience,
} from '@/components/frontend';

const Home: React.FC<PageProps> = (): JSX.Element => (
  <>
    <WelcomePage />
    <HomeAbout />
    <Course />
    <Blog />
    <Newsletter />
    <Experience />
  </>
);

export default Home;
