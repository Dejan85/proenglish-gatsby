import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import {
  WelcomePage,
  About,
  Course,
  Blog,
  Newsletter,
} from '@/components/frontend';

const Home: React.FC<PageProps> = (): JSX.Element => (
  <>
    <WelcomePage />
    <About />
    <Course />
    <Blog />
    <Newsletter />
  </>
);

export default Home;
