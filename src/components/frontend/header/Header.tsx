import React from 'react';
import { Container, Logo } from '@/components/ui';
import './styles.scss';

const Header = (): JSX.Element => (
  <Container>
    <header className="header">
      <Logo />
    </header>
  </Container>
);

export default Header;
