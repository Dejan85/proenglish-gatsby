import React from 'react';
import uniqid from 'uniqid';
import { Container } from '@/components/ui';
import {
  FaUsers,
  FaRegComments,
  FaUserTie,
  FaCommentDots,
  FaTeamspeak,
} from 'react-icons/fa';
import Box from './Box';
import { boxesText } from './constants';
import './styles.scss';

const Wrapper = 'div';
const className = 'home-icon-boxes';

const icons = [FaUsers, FaRegComments, FaUserTie, FaCommentDots, FaTeamspeak];

const generateBoxes = (): JSX.Element[] =>
  icons.map((icon: any, i: number) => (
    <Box
      key={uniqid()}
      icon={icon}
      text={boxesText[i]}
      customClassName={`box${i}`}
    />
  ));

const boxes = generateBoxes();

function HomeIconsBoxes(): JSX.Element {
  return (
    <Container>
      <Wrapper className={className}>{boxes}</Wrapper>
    </Container>
  );
}

export default HomeIconsBoxes;
