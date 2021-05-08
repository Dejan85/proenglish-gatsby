import React from 'react';
import {
  Text,
  Heading,
  HomeIconsBoxes,
  SubContainer,
  ContentContainer,
} from '@/components/ui';
import { graphql, useStaticQuery } from 'gatsby';
import { BgImage } from 'gbimage-bridge';
import { getImage } from 'gatsby-plugin-image';
import './styles.scss';

export const query = graphql`
  {
    mdx(frontmatter: { title: { eq: "welcome-page" } }) {
      frontmatter {
        title
        text
        heading
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

const WelcomePage = (): JSX.Element => {
  const data = useStaticQuery(query);
  const {
    mdx: {
      frontmatter: {
        title,
        heading,
        text,
        image: { childImageSharp },
      },
    },
  } = data;

  const imageSrc = getImage(childImageSharp);

  return (
    <BgImage className="welcome-page__bg-image" image={imageSrc}>
      <ContentContainer className="welcome-page">
        <ContentContainer className="welcome-page__text">
          <Heading as="h1" className="welcome-page__heading">
            {heading}
          </Heading>
          <Text as="p" className="welcome-page__paragraph">
            {text}
          </Text>
        </ContentContainer>
      </ContentContainer>
      <SubContainer className="welcome-page__boxes">
        <HomeIconsBoxes />
      </SubContainer>
    </BgImage>
  );
};

export default WelcomePage;
