import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Logo = (): JSX.Element => {
  const Wrapper = `div`;
  return (
    <Wrapper>
      <StaticImage src="./images/logo.png" alt="logo" placeholder="blurred" />
    </Wrapper>
  );
};

export default Logo;
