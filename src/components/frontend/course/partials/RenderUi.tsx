import React, { useState, useMemo } from 'react';
import { ContentContainer, Link, Text } from '@/components/ui';
import uniqid from 'uniqid';
import { useStringSplit } from '@/hooks';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import { heading, text, textInSpan, courseData } from '../messages';

const initCourse = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];

const counterHandlerDecrese = (
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  setDiagram: React.Dispatch<React.SetStateAction<number>>,
  counter: number,
  diagram: number,
) => {
  if (counter === 0) {
    setCounter(() => 5);
    setDiagram(() => 100);
  } else {
    setCounter(() => counter - 1);
    setDiagram(() => diagram - 16.67);
  }
};

const counterHandlerIncrese = (
  setCounter: React.Dispatch<React.SetStateAction<number>>,
  setDiagram: React.Dispatch<React.SetStateAction<number>>,
  counter: number,
  diagram: number,
) => {
  if (counter === 5) {
    setCounter(() => 0);
    setDiagram(() => 16.67);
  } else {
    setCounter(() => counter + 1);
    setDiagram(() => diagram + 16.67);
  }
};

const RenderUi = (): JSX.Element => {
  const [counter, setCounter] = useState(0);
  const [diagram, setDiagram] = useState<number>(16.67);
  const { stringSplit } = useStringSplit();
  let diagramText: { firstWord: string; secondWord: string } = {
    firstWord: '',
    secondWord: '',
  };

  const contentUi = useMemo(
    (): JSX.Element[] =>
      courseData.map(
        (item: any) =>
          item[initCourse[counter]] &&
          item[initCourse[counter]].map((item: any, index: number) => {
            if (index === 0) {
              diagramText = stringSplit(item[0]);
            }
            return (
              <Text as="p" className="course__text-paragraph" key={uniqid()}>
                {item[0]}
              </Text>
            );
          }),
      ),
    [counter, stringSplit],
  );

  return (
    <ContentContainer className="course">
      <ContentContainer className="course__top-container">
        <ContentContainer className="course__right-content">
          <Link as="a" href="/" className="course__heading">
            {heading}
          </Link>

          <ContentContainer className="course__text-container">
            {text.map((text) => (
              <Text key={uniqid()} className="course__text" as="p">
                {text}
              </Text>
            ))}
            <Text className="course__text course__text-span" as="span">
              {textInSpan}
            </Text>
          </ContentContainer>
        </ContentContainer>
      </ContentContainer>
      <ContentContainer className="course__bottom-container">
        <ContentContainer className="course__left-content">
          <ContentContainer className="course__diagram-nav-container">
            <ContentContainer
              className="course__diagram-nav-icon-container"
              onClick={() =>
                counterHandlerDecrese(setCounter, setDiagram, counter, diagram)
              }
            >
              <FaCaretLeft className="course__diagram-nav-icon" />
            </ContentContainer>

            <ContentContainer
              onClick={() =>
                counterHandlerIncrese(setCounter, setDiagram, counter, diagram)
              }
              className="course__diagram-nav-icon-container"
            >
              <FaCaretRight className="course__diagram-nav-icon" />
            </ContentContainer>
          </ContentContainer>
          <ContentContainer className="course__paragraph-container">
            {contentUi}
          </ContentContainer>
        </ContentContainer>
        <ContentContainer height={`${diagram}%`} className="course__diagram">
          <Text className="course__diagram-text" as="p">
            {diagramText.firstWord}
          </Text>
          <Text className="course__diagram-text" as="p">
            {diagramText.secondWord}
          </Text>
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  );
};

export default RenderUi;
