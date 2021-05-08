import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Wrapper = 'div';
const className = 'logo';

export const query = graphql`
  {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`;

const Logo = (): JSX.Element => {
  const data = useStaticQuery(query);
  const {
    file: { childImageSharp },
  } = data;
  const pathToImage = getImage(childImageSharp);

  return (
    <Wrapper className={className}>
      <GatsbyImage image={pathToImage} alt="logo" />
    </Wrapper>
  );
};

export default Logo;
