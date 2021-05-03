import React from 'react';
import { Link } from 'gatsby';
import uniqid from 'uniqid';
import { Element } from './partials/Index';
import { NAV_CONTENT } from './constants';

const Nav = (): JSX.Element => {
  const Wrapper = 'nav';

  return (
    <Wrapper className="nav">
      <Element as="ul" className="nav__list">
        {NAV_CONTENT.map(
          ({ name, path }): JSX.Element => (
            <Element as="li" className="nav__item" key={uniqid()}>
              <Link className="nav__link" to={path}>
                {name}
              </Link>
            </Element>
          ),
        )}
      </Element>
    </Wrapper>
  );
};

export default Nav;
