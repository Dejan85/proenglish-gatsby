import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import { Blog, BlogPage } from '@/components/frontend';

const Onama: React.FC<PageProps> = (): JSX.Element => (
  <>
    <Blog />
  </>
);

export default Onama;
