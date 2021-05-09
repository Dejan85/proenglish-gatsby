import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import { Exams } from '@/components/frontend';

const Onama: React.FC<PageProps> = (): JSX.Element => (
  <>
    <Exams />
  </>
);

export default Onama;
