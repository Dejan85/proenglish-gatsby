import React from 'react';
import uniqid from 'uniqid';
import {
  FaUsers,
  FaRegComments,
  FaUserTie,
  FaCommentDots,
  FaTeamspeak,
} from 'react-icons/fa';
import Box from './Box';
import { boxesText } from './constants';

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
  return <Wrapper className={className}>{boxes}</Wrapper>;
}

export default HomeIconsBoxes;
