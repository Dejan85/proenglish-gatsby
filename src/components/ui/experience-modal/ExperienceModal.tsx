import React from 'react';

const Wrapper = 'div';

const ExperienceModal = (props: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element => {
  const { children } = props;
  return <Wrapper className="experience-modal">{children}</Wrapper>;
};

export default ExperienceModal;
