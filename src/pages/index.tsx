import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import { Layout, WelcomePage } from '@/components/frontend';

const Home: React.FC<PageProps> = (): JSX.Element => (
  <Layout>
    <WelcomePage />
  </Layout>
);

export default Home;
