import React from 'react';
import './styles.scss';
import uniqid from 'uniqid';
import {
  ContentContainer,
  SubContainer,
  Text,
  Line,
  Heading,
  ExperienceModal,
  CarouselUi,
} from '@/components/ui';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { studentsExperiance } from './messages';

export const query = graphql`
  {
    mdx(frontmatter: { title: { eq: "experience-content" } }) {
      frontmatter {
        title
        heading
        jelenaDimitrijevic {
          childImageSharp {
            gatsbyImageData
          }
        }
        milosVukovic {
          childImageSharp {
            gatsbyImageData
          }
        }
        milosTerzic {
          childImageSharp {
            gatsbyImageData
          }
        }
        jovanaVukovic {
          childImageSharp {
            gatsbyImageData
          }
        }
        bojanaObradovic {
          childImageSharp {
            gatsbyImageData
          }
        }
        bojanRadovanovic {
          childImageSharp {
            gatsbyImageData
          }
        }
        emaLukic {
          childImageSharp {
            gatsbyImageData
          }
        }
        andjelaGajic {
          childImageSharp {
            gatsbyImageData
          }
        }
        mihajlo {
          childImageSharp {
            gatsbyImageData
          }
        }
        background {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

const Experience = (): JSX.Element => {
  const data = useStaticQuery(query);
  const {
    mdx: {
      frontmatter: {
        title,
        heading,
        jelenaDimitrijevic: { childImageSharp: jelenaDimitrijevic },
        milosVukovic: { childImageSharp: milosVukovic },
        milosTerzic: { childImageSharp: milosTerzic },
        jovanaVukovic: { childImageSharp: jovanaVukovic },
        bojanaObradovic: { childImageSharp: bojanaObradovic },
        bojanRadovanovic: { childImageSharp: bojanRadovanovic },
        emaLukic: { childImageSharp: emaLukic },
        andjelaGajic: { childImageSharp: andjelaGajic },
        mihajlo: { childImageSharp: mihajlo },
        background: { childImageSharp: background },
      },
    },
  } = data;

  const images = [
    jelenaDimitrijevic,
    milosVukovic,
    milosTerzic,
    jovanaVukovic,
    bojanaObradovic,
    bojanRadovanovic,
    emaLukic,
    andjelaGajic,
    mihajlo,
  ];

  const backgroundImage = getImage(background);

  return (
    <BgImage
      image={backgroundImage}
      style={{ width: '100%', marginTop: '20rem' }}
    >
      <ContentContainer className="home-experience">
        <SubContainer className="home-experience__container">
          <ContentContainer className="home-experience__heading-container">
            <Heading className="home-experience__heading" as="h1">
              {heading}
            </Heading>
            <Line>
              <Line.SmallLine />
              <Line.LargeLine />
            </Line>
          </ContentContainer>

          <CarouselUi>
            {studentsExperiance.map((item, index) => {
              const { exp, name } = item;
              const img = getImage(images[index]);

              return (
                <ContentContainer
                  flexDirection="column"
                  height="40rem"
                  justifyContent="space-between"
                  key={uniqid()}
                >
                  <ContentContainer
                    marginTop="5rem"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <ExperienceModal>
                      <Text className="experience-modal-text" as="p">
                        {exp}
                      </Text>
                    </ExperienceModal>
                  </ContentContainer>

                  <ContentContainer
                    marginTop="5rem"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center"
                    height="18rem"
                  >
                    <ContentContainer width="10rem">
                      <GatsbyImage
                        className="home-experience__img"
                        image={img}
                        alt="img"
                      />
                    </ContentContainer>
                    <Text
                      className="experience-modal-name"
                      as="p"
                    >{`${name}`}</Text>
                  </ContentContainer>
                </ContentContainer>
              );
            })}
          </CarouselUi>
        </SubContainer>
      </ContentContainer>
    </BgImage>
  );
};

export default Experience;
