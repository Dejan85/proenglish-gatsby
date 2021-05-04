import React from 'react';
import { Container, Heading, Text } from '@/components/ui';
import './styles.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import uniqid from 'uniqid';

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
    content: allMdx(
      filter: { frontmatter: { title: { eq: "welcome page content" } } }
    ) {
      edges {
        node {
          frontmatter {
            heading
            text
          }
        }
      }
    }
  }
`;

const WelcomePage = (): JSX.Element => {
  const {
    backgroundImage,
    content: { edges },
  } = useStaticQuery(query);
  const pluginImage = getImage(backgroundImage);

  return (
    <BgImage className="home-welcome-page__bg-image" image={pluginImage}>
      <Container width="100%" className="home-welcome-page">
        {edges.map((item) => {
          const {
            node: {
              frontmatter: { heading, text },
            },
          } = item;
          return (
            <Container
              key={uniqid()}
              className="home-welcome-page__text-content"
            >
              <Heading className="home-welcome-page__heading">
                {heading}
              </Heading>
              <Text className="home-welcome-page__text">{text}</Text>
            </Container>
          );
        })}
      </Container>
    </BgImage>
  );
};

export default WelcomePage;
