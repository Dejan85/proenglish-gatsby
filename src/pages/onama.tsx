import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import { About } from '@/components/frontend';

const Onama: React.FC<PageProps> = (): JSX.Element => (
  <>
    <About />
  </>
);

export default Onama;
