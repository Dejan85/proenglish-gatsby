import React from 'react';
import './styles.scss';
import {
  ContentContainer,
  SubContainer,
  Text,
  Heading,
  Link as LinkUi,
} from '@/components/ui';
import uniqid from 'uniqid';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export const query = graphql`
  {
    mdx(frontmatter: { title: { eq: "home-about" } }) {
      frontmatter {
        title
        heading
        text
        text2
        text3
        text4
        linkText
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

const About = (): JSX.Element => {
  const data = useStaticQuery(query);
  const {
    mdx: {
      frontmatter: {
        title,
        heading,
        text,
        text2,
        text3,
        text4,
        linkText,
        image: { childImageSharp },
      },
    },
  } = data;

  const pathToImage = getImage(childImageSharp);
  const aboutText = [text, text2, text3, text4];

  return (
    <SubContainer className="home-about">
      <ContentContainer className="home-about__content">
        <ContentContainer className="home-about__text">
          <Heading as="h2" className="home-about__heading">
            {heading}
          </Heading>
          {aboutText.map(
            (txt: string): JSX.Element => (
              <ContentContainer
                className="home-about__text--container"
                key={uniqid()}
              >
                <Text as="p" className="default-paragraph">
                  {txt}
                </Text>
              </ContentContainer>
            ),
          )}
          <LinkUi className="home-about__link" to="/onama" as={Link}>
            {linkText}
          </LinkUi>
        </ContentContainer>
        <ContentContainer className="home-about__image-container">
          <GatsbyImage
            className="home-about__image"
            image={pathToImage}
            alt="logo"
          />
        </ContentContainer>
      </ContentContainer>
    </SubContainer>
  );
};

export default About;
