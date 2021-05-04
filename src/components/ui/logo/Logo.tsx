import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './styles.scss';

const Logo = (): JSX.Element => {
  const Wrapper = 'div';
  return (
    <Wrapper className="logo">
      <StaticImage src="./images/logo.png" alt="logo" placeholder="blurred" />
    </Wrapper>
  );
};

export default Logo;
