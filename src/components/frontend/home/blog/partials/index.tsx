import React from 'react';
import uniqid from 'uniqid';
import { Link } from 'gatsby';
import {
  Line,
  BlogModal,
  Link as UiLink,
  Text,
  Heading,
  SubContainer,
  ContentContainer,
  Loading,
} from '@/components/ui';
import { FormatTime } from '@/utils/timeAndDateHandlers';
import { SubStr } from '@/utils/SubStr';
import { base64 } from '@/utils/base64';
import { getImage, GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import { encode, decode, toBase64 } from 'js-base64';
import { headingText } from '../messages';

const generateImage = (image) => {
  const pathToImage = getImage(image);

  return pathToImage;
};

const RenderModal = (props: { blogData: object[] }): JSX.Element => {
  const { blogData: data } = props;

  return (
    <>
      {data.slice(0, 4).map(
        (item: any): JSX.Element => {
          const test = `${item.photo.data?.data}`;
          const image = toBase64(test);
          const base64Image = `data:image/png;base64,${image}`;

          return (
            <BlogModal key={uniqid()}>
              {/* <Image
                alt="img"
                src={item.photo}
                type="base64"
                className="home-blog__modal-image"
                disablelazyLoad
              /> */}
              {/* <GatsbyImage
                image={item.photo.data.data}
                className="home-blog__modal-image"
                alt="image"
              /> */}
              <UiLink
                as={Link}
                className="no-background-color heading-link home-blog__modal-link"
                to="/"
              >
                {item.title}
              </UiLink>

              <ContentContainer className="home-blog__modal-text-container">
                <Text as="p" className="home-blog__modal-text">
                  <SubStr>{item.description}</SubStr>
                </Text>
              </ContentContainer>

              <Line className="align-item-flex-start reset-padding-bottom">
                <Line.SmallLine />
              </Line>

              <ContentContainer className="home-blog__modal-date-container">
                <Text as="span" className="home-blog__blog-modal-span">
                  <FormatTime>{item.created}</FormatTime>
                </Text>
              </ContentContainer>

              <ContentContainer className="home-blog__modal-signature-container">
                <Text
                  as="span"
                  className="home-blog__blog-modal-span poppins-sans-serif"
                >
                  by
                </Text>
                <Text
                  as="span"
                  className="home-blog__blog-modal-span home-blog__blog-modal-span--text-orange home-blog__blog-modal-span--popin-sans-serif"
                >
                  {item.postedBy}
                </Text>
              </ContentContainer>
            </BlogModal>
          );
        },
      )}
    </>
  );
};

const RenderLine: JSX.Element = (
  <Line>
    <Line.SmallLine />
    <Line.LargeLine />
  </Line>
);

export const RenderUi = (props: { blogData: object[] }): JSX.Element => {
  const { blogData } = props;

  return (
    <>
      <SubContainer className="home-blog">
        <ContentContainer className="home-blog__heading-container">
          <Heading as="h1" className="default-heading">
            {headingText}
          </Heading>
          {RenderLine}
        </ContentContainer>
        <ContentContainer className="home-blog__modal-container">
          {blogData.length ? <RenderModal blogData={blogData} /> : <Loading />}
        </ContentContainer>
      </SubContainer>
    </>
  );
};
