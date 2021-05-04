import React from 'react';
import { Container, Heading, Text } from '@/components/ui';
import './styles.scss';
import { useStaticQuery, graphql } from 'gatsby';
import uniqid from 'uniqid';
import { CONTENT } from './constants';

const HomeAbout = (): JSX.Element => {
  const { heading, text } = CONTENT;
  return (
    <Container className="home-about">
      <Heading className="home-about__heading">{heading}</Heading>
      <>
        {text.map(
          (txt: string): JSX.Element => (
            <Text key={uniqid()} className="heading-about__text">
              {txt}
            </Text>
          ),
        )}
      </>
    </Container>
  );
};

export default HomeAbout;
