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
import { firstMsg, secondMsg } from './messages';
import './styles.scss';

export const query = graphql`
  {
    file(relativePath: { eq: "welcome-page-background.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
      }
    }
  }
`;

const WelcomePage = (): JSX.Element => {
  const data = useStaticQuery(query);
  const {
    file: { childImageSharp },
  } = data;
  const image = getImage(childImageSharp);

  return (
    <BgImage image={image}>
      <ContentContainer className="welcome-page">
        <ContentContainer className="welcome-page__text">
          <Heading as="h1" className="welcome-page__heading">
            {firstMsg}
          </Heading>
          <Text as="p" className="welcome-page__paragraph">
            {secondMsg}
          </Text>
        </ContentContainer>
      </ContentContainer>
      <SubContainer>
        <HomeIconsBoxes />
      </SubContainer>
    </BgImage>
  );
};

export default WelcomePage;
