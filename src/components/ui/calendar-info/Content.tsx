import React from 'react';
import {
  Heading,
  // FontAwesomeIcon,
  Text,
  ContentContainer,
} from '@/components/ui';
import { ContentProps } from './types';

const Wrapper = 'div';
const className = 'calendar-content';

const Content = (props: ContentProps) => {
  const { title, date, description, icon } = props;

  return (
    <Wrapper className={className}>
      <Heading className="calendar-content__heading" as="h1">
        {title}
      </Heading>
      <ContentContainer className="calendar-content__date-container">
        {/* <FontAwesomeIcon className={`${icon} calendar-content__icon`} /> */}
        <Text className="calendar-content__date" as="span">
          {date}
        </Text>
      </ContentContainer>
      <Text as="p" className="calendar-content__description">
        {description}
      </Text>
    </Wrapper>
  );
};

export default Content;
