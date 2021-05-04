import React, { useState } from 'react';
import { Link } from 'gatsby';
import uniqid from 'uniqid';
import { FiAlignJustify } from 'react-icons/fi';
import { Element } from './partials/Element';
import { NAV_CONTENT } from './constants';
import './styles.scss';

const Nav = (): JSX.Element => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const Wrapper = 'nav';

  const navHandler = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <Wrapper className="nav">
      <FiAlignJustify className="nav__responsive-btn" onClick={navHandler} />
      {toggleNav && (
        <Element as="div" className="nav__wrapper">
          <>
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
          </>
        </Element>
      )}
    </Wrapper>
  );
};

export default Nav;
