import React from 'react';
import './styles.scss';
import {
  ContentContainer,
  Text,
  Heading,
  Link as UiLink,
} from '@/components/ui';
import { Link } from 'gatsby';
import {
  headingText,
  headingText2,
  text,
  text2,
  linkText,
  linkText2,
  linkPath,
} from './messages';

const MemoizedUi: JSX.Element = (
  <>
    <ContentContainer className="home-course">
      <ContentContainer className="home-course__left-image-container">
        {/* {imageUi} */}
      </ContentContainer>
      <ContentContainer className="home-course__right-text-container">
        <ContentContainer className="home-course__right-text">
          <Heading as="h2" className="default-heading">
            {headingText}
          </Heading>
          <Text as="p" className="default-paragraph">
            {text}
          </Text>
          <UiLink className="home-course__link" to={linkPath} as={Link}>
            {linkText}
          </UiLink>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>

    <ContentContainer className="home-course home-course--no-margin-top ">
      <ContentContainer className="home-course__left-text-container home-course__left-text-container--order-2">
        <ContentContainer className="home-course__left-text">
          <Heading as="h2" className="default-heading">
            {headingText2}
          </Heading>
          <Text as="p" className="default-paragraph">
            {text2}
          </Text>
          <UiLink className="home-course__link" to={linkPath} as={Link}>
            {linkText2}
          </UiLink>
        </ContentContainer>
      </ContentContainer>
      <ContentContainer className="home-course__right-image-container home-course__right-image-container--order-1">
        {/* {imageUi2} */}
      </ContentContainer>
    </ContentContainer>
  </>
);

const Course = (): JSX.Element => MemoizedUi;

export default Course;
