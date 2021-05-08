import React, { useState } from 'react';
import uniqid from 'uniqid';
import { ContentContainer } from '@/components/ui';
import { NavigationProps } from './types';
import List from './partials/List';

const Wrapper = 'ul';
const className = 'responsive-navigation';
const linkClassName = 'responsive-navigation__link';
const responsiveActiveClassName = 'responsive-navigation__active';

const ResponsiveNavigation = (props: NavigationProps): JSX.Element => {
  const { routerLink, linksText, linksPath } = props;
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const Link: any = routerLink;

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
                exact
                to={linksPath[index]}
              >
                {text}
              </Link>
            </List>
          ))}
      </ContentContainer>

      {/* <FontAwesomeIcon
        className="fas fa-bars responsive-navigation__icon"
        onClick={dropNavHandler}
      /> */}
    </Wrapper>
  );
};

export default ResponsiveNavigation;
