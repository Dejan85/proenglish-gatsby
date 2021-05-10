import React from 'react';
import { PageProps } from 'gatsby';
import '@/styles/main.scss';
import { Pricelist } from '@/components/frontend';

const Onama: React.FC<PageProps> = (): JSX.Element => (
  <>
    <Pricelist />
  </>
);

export default Onama;
