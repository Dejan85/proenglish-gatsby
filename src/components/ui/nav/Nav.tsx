import React from 'react';
import { Link } from 'gatsby';
import uniqid from 'uniqid';
import { Element } from './partials/Element';
import { NAV_CONTENT } from './constants';
import './styles.scss';

const Nav = (): JSX.Element => {
  const Wrapper = 'nav';

  return (
    <Wrapper className="nav">
      <Element as="div" className="nav__wrapper">
        {NAV_CONTENT.map(
          ({ name, path }): JSX.Element => (
            <Element as="div" key={uniqid()}>
              <Link
                to={path}
                className="nav__link"
                activeClassName="nav__active"
              >
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
