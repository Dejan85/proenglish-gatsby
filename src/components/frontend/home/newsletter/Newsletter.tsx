import React from 'react';
import './styles.scss';
import { ContentContainer, Text, Input, Button } from '@/components/ui';
// import img from './images/bckg2.jpg';
import { msg } from './messages';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export const query = graphql`
  {
    mdx(frontmatter: { title: { eq: "newsletter-content" } }) {
      frontmatter {
        title
        text
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

const Newsletter = (): JSX.Element => {
  const data = useStaticQuery(query);
  const {
    mdx: {
      frontmatter: {
        title,
        text,
        image: { childImageSharp },
      },
    },
  } = data;

  const pathToImage = getImage(childImageSharp);

  return (
    <>
      <ContentContainer className="home-newsletter">
        <ContentContainer className="home-newsletter__image">
          <GatsbyImage
            className="home-about__image"
            image={pathToImage}
            alt="logo"
          />
        </ContentContainer>

        <ContentContainer className="home-newsletter__modal-container">
          <ContentContainer
            justifyContent="center"
            alignItems="center"
            padding="2rem"
            width="100%"
            height="20rem"
            borderRadius="5px"
            className="background-color-main-color"
          >
            <Text className="home-newsletter__text" as="p">
              {text}
            </Text>
          </ContentContainer>
          <ContentContainer className="home-newsletter__input-container">
            <Input
              className="home-newsletter__input"
              placeholder="Uzmite svoju dozu znanja..."
            />
            <Button className="home-newsletter__button">Prijavi se</Button>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>
    </>
  );
};

export default Newsletter;
