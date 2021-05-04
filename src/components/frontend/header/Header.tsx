import React from 'react';
import { Container, Logo, Nav } from '@/components/ui';
import './styles.scss';

const Header = (): JSX.Element => (
  <Container>
    <header className="header">
      <Logo />
      <Nav />
    </header>
  </Container>
);

export default Header;
