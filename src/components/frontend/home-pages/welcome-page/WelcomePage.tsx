import React from 'react';
import { Container } from '@/components/ui';
import './styles.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
// import BackgroundImage from 'gatsby-background-image';
import { BgImage } from 'gbimage-bridge';

const query = graphql`
  {
    backgroundImage: file(sourceInstanceName: { eq: "welcome-page" }) {
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

  return (
    <BgImage className="home-welcome-page__bg-image" image={pluginImage}>
      <Container width="100%" className="home-welcome-page">
        <p>welcome page</p>
      </Container>
    </BgImage>
  );
};

export default WelcomePage;
