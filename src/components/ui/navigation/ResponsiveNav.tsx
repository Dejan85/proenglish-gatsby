import React, { useState } from 'react';
import uniqid from 'uniqid';
import { ContentContainer } from '@/components/ui';
import { Link } from 'gatsby';
import { FaAlignJustify } from 'react-icons/fa';
import { NavigationProps } from './types';
import List from './partials/List';

const Wrapper = 'ul';
const className = 'responsive-navigation';
const linkClassName = 'responsive-navigation__link';
const responsiveActiveClassName = 'responsive-navigation__active';

const ResponsiveNavigation = (props: NavigationProps): JSX.Element => {
  const { linksText, linksPath } = props;
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  const dropNavHandler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <Wrapper className={className}>
      <ContentContainer className="responsive-navigation__container">
        {toggleNav &&
          linksText?.map((text: string, index: number) => (
            <List key={uniqid()} onClick={dropNavHandler}>
              <Link
                className={linkClassName}
                activeClassName={responsiveActiveClassName}
                to={linksPath[index]}
              >
                {text}
              </Link>
            </List>
          ))}
      </ContentContainer>

      <FaAlignJustify
        className="responsive-navigation__icon"
        onClick={dropNavHandler}
      />
    </Wrapper>
  );
};

export default ResponsiveNavigation;
