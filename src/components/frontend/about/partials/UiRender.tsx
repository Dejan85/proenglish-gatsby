import React from 'react';
import {
  ContentContainer,
  SubContainer,
  Heading,
  Loading,
} from '@/components/ui';
import parse from 'html-react-parser';
import uniqid from 'uniqid';
import { BgImage } from 'gbimage-bridge';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import image from '../images/image.jpg';
import image2 from '../images/image2.jpg';
import { UiRenderProps } from '../types';

const UiRender = (props: UiRenderProps) => {
  const { aboutData } = props;

  return (
    <>
      <ContentContainer className="about__background" />

      {aboutData?.length ? (
        aboutData.map((data: any, index: number) => {
          const { title, body } = data;
          return (
            <ContentContainer key={uniqid()} className="about">
              {index === 0 ? (
                <>
                  <SubContainer className="about__sub-container">
                    <Heading className="about__heading" as="h1">
                      {title}
                    </Heading>
                    <ContentContainer className="about__content">
                      <ContentContainer className="about__text">
                        {parse(body)}
                      </ContentContainer>
                      {/* <Image
                        disablelazyLoad
                        className="about__image"
                        alt="img"
                        src={image}
                      /> */}
                    </ContentContainer>
                  </SubContainer>
                </>
              ) : (
                <>
                  <ContentContainer className="about__background-2" />

                  <SubContainer className="about__sub-container">
                    <Heading className="about__heading" as="h1">
                      {title}
                    </Heading>
                    <ContentContainer className="about__content">
                      {/* <Image className="about__image" alt="img" src={image2} /> */}
                      <ContentContainer className="about__text-left">
                        {parse(body)}
                      </ContentContainer>
                    </ContentContainer>
                  </SubContainer>
                </>
              )}
            </ContentContainer>
          );
        })
      ) : (
        <Loading height="40vh" />
      )}
    </>
  );
};

export default UiRender;
