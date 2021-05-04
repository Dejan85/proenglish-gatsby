import React from 'react';
import { Container, Heading, Text } from '@/components/ui';
import './styles.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import uniqid from 'uniqid';
import { CONTENT } from './constants';

const query = graphql`
  {
    backgroundImage: file(sourceInstanceName: { eq: "welcome-page-image" }) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          quality: 50
          webpOptions: { quality: 70 }
        )
      }
    }
  }
`;

const WelcomePage = (): JSX.Element => {
  const { backgroundImage } = useStaticQuery(query);
  const pluginImage = getImage(backgroundImage);

  const { heading, text } = CONTENT;

  return (
    <BgImage className="home-welcome-page__bg-image" image={pluginImage}>
      <Container width="100%" className="home-welcome-page">
        <Container key={uniqid()} className="home-welcome-page__text-content">
          <Heading className="home-welcome-page__heading">{heading}</Heading>
          <Text className="home-welcome-page__text">{text}</Text>
        </Container>
      </Container>
    </BgImage>
  );
};

export default WelcomePage;
