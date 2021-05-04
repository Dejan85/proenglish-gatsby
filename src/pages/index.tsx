import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import { Layout, WelcomePage, HomeAbout } from '@/components/frontend';
import { HomeIconsBoxes } from '@/components/ui';

const Home: React.FC<PageProps> = (): JSX.Element => (
  <Layout>
    <WelcomePage />
    <HomeIconsBoxes />
    <HomeAbout />
  </Layout>
);

export default Home;
