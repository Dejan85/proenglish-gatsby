import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import { Course } from '@/components/frontend';

const Onama: React.FC<PageProps> = (): JSX.Element => (
  <>
    <Course />
  </>
);

export default Onama;
