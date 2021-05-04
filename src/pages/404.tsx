import React from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@/components/frontend';

const NotFound: React.FC<PageProps> = (): JSX.Element => (
  <Layout>
    <main>
      <p>Sorry, page not found!</p>
    </main>
  </Layout>
);

export default NotFound;
