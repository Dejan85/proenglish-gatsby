import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import { Events } from '@/components/frontend';

const Onama: React.FC<PageProps> = (): JSX.Element => (
  <>
    <Events />
  </>
);

export default Onama;
