import React from 'react';
import { Text } from '@/components/ui';
import { TagType, BoxProps } from './types';

const Wrapper: TagType = 'div';
const IconContainer: TagType = 'div';
const className = 'box';
const IconContainerClassName = 'icon-container';

const Box = (props: BoxProps): JSX.Element => {
  const { icon, text, customClassName } = props;
  const Icon = icon;
  return (
    <Wrapper className={className}>
      <IconContainer
        className={
          customClassName
            ? `${IconContainerClassName} ${IconContainerClassName}--${customClassName}`
            : IconContainerClassName
        }
      >
        <Icon />
      </IconContainer>
      <Text as="p" className="home-boxes-paragraph">
        {text}
      </Text>
    </Wrapper>
  );
};

export default Box;
