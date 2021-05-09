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
import { graphql, useStaticQuery, Link } from 'gatsby';
import { UiRenderProps } from '../types';

export const query = graphql`
  {
    mdx(frontmatter: { title: { eq: "about-content" } }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        image2 {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        backgroundImage {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: { fit: COVER }
            )
          }
        }
        backgroundImage2 {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: { fit: COVER }
            )
          }
        }
      }
    }
  }
`;

const UiRender = (props: UiRenderProps): JSX.Element => {
  const { aboutData } = props;
  const data = useStaticQuery(query);
  const {
    mdx: {
      frontmatter: {
        image: { childImageSharp: image },
        image2: { childImageSharp: image2 },
        backgroundImage: { childImageSharp: backgroundImage },
        backgroundImage2: { childImageSharp: backgroundImage2 },
      },
    },
  } = data;

  const pathToImage = getImage(image);
  const pathToImage2 = getImage(image2);
  const pathTobackgroundImage = getImage(backgroundImage);
  const pathTobackgroundImage2 = getImage(backgroundImage2);

  return (
    <>
      <ContentContainer className="about__background">
        <BgImage className="about__bg-img" image={pathTobackgroundImage} />
      </ContentContainer>

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

                      <GatsbyImage
                        className="about__image"
                        image={pathToImage}
                        alt="img"
                      />
                    </ContentContainer>
                  </SubContainer>
                </>
              ) : (
                <>
                  <ContentContainer className="about__background-2">
                    <BgImage
                      className="about__bg-img"
                      image={pathTobackgroundImage2}
                    />
                  </ContentContainer>

                  <SubContainer className="about__sub-container">
                    <Heading className="about__heading" as="h1">
                      {title}
                    </Heading>
                    <ContentContainer className="about__content">
                      <GatsbyImage
                        className="about__image"
                        image={pathToImage2}
                        alt="img"
                      />
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
