import React from 'react';
import {
  SubContainer,
  Logo,
  Navigation,
  Header as HeaderUi,
} from '@/components/ui';
import { linksText, linksPath } from './constants';
import './styles.scss';

const MemoizedUi: JSX.Element = (
  <HeaderUi>
    <SubContainer className="header-container">
      <Logo />
      <Navigation linksText={linksText} linksPath={linksPath} />
    </SubContainer>
    {/* <Navigation.ResponsiveNavigation
      linksText={linksText}
      linksPath={linksPath}
    /> */}
  </HeaderUi>
);

const Header = (): JSX.Element => MemoizedUi;

export default Header;
