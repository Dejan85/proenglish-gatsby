import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import { Layout, WelcomePage } from '@/components/frontend';
import { HomeIconsBoxes } from '@/components/ui';

const Home: React.FC<PageProps> = (): JSX.Element => (
  <Layout>
    <WelcomePage />
    <HomeIconsBoxes />
  </Layout>
);

export default Home;
