import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'gatsby';
import { NavigationProps } from './types';
import List from './partials/List';
import ResponsiveNavigation from './ResponsiveNav';

const Wrapper = 'ul';
const className = 'navigation';
const linkClassName = 'navigation__link';
const activeClassName = 'active';

const Navigation = (props: NavigationProps): JSX.Element => {
  const { linksText, linksPath } = props;

  return (
    <Wrapper className={className}>
      {linksText?.map((text: string, index: number) => (
        <List key={uniqid()}>
          <Link
            className={linkClassName}
            activeClassName={activeClassName}
            to={linksPath[index]}
          >
            {text}
          </Link>
        </List>
      ))}
    </Wrapper>
  );
};

Navigation.ResponsiveNavigation = ResponsiveNavigation;

export default Navigation;
