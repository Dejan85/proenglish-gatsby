import React from 'react';
import './styles.scss';
import {
  ContentContainer,
  Text,
  Heading,
  Link as UiLink,
} from '@/components/ui';

import { graphql, useStaticQuery, Link } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export const query = graphql`
  {
    mdx(frontmatter: { title: { eq: "home-course" } }) {
      frontmatter {
        title
        heading
        heading2
        text
        text2
        linkText
        linkText2
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        image2 {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        slug
      }
    }
  }
`;

const Course = (): JSX.Element => {
  const data = useStaticQuery(query);
  const {
    mdx: {
      frontmatter: {
        title,
        heading,
        heading2,
        text,
        text2,
        linkText,
        linkText2,
        image: { childImageSharp },
        image2: { childImageSharp: childImageSharp2 },
        slug,
      },
    },
  } = data;

  const pathToImage = getImage(childImageSharp);
  const pathToImage2 = getImage(childImageSharp2);

  return (
    <>
      <ContentContainer className="home-course">
        <ContentContainer className="home-course__left-image-container">
          <GatsbyImage
            className="home-about__image"
            image={pathToImage}
            alt="logo"
          />
        </ContentContainer>
        <ContentContainer className="home-course__right-text-container">
          <ContentContainer className="home-course__right-text">
            <Heading as="h2" className="default-heading">
              {heading}
            </Heading>
            <Text as="p" className="default-paragraph">
              {text}
            </Text>
            <UiLink className="home-course__link" to={slug} as={Link}>
              {linkText}
            </UiLink>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>

      <ContentContainer className="home-course home-course--no-margin-top ">
        <ContentContainer className="home-course__left-text-container home-course__left-text-container--order-2">
          <ContentContainer className="home-course__left-text">
            <Heading as="h2" className="default-heading">
              {heading2}
            </Heading>
            <Text as="p" className="default-paragraph">
              {text2}
            </Text>
            <UiLink className="home-course__link" to={slug} as={Link}>
              {linkText2}
            </UiLink>
          </ContentContainer>
        </ContentContainer>
        <ContentContainer className="home-course__right-image-container home-course__right-image-container--order-1">
          <GatsbyImage
            className="home-about__image"
            image={pathToImage2}
            alt="logo"
          />
        </ContentContainer>
      </ContentContainer>
    </>
  );
};

export default Course;
