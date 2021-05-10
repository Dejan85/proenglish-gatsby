import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import { Contact } from '@/components/frontend';

const Onama: React.FC<PageProps> = (): JSX.Element => (
  <>
    <Contact />
  </>
);

export default Onama;
