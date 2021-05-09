import React, { useRef } from 'react';
import { ContentContainer } from '@/components/ui';
import { useTabs } from '@/hooks';
import parse from 'html-react-parser';
import { Scrollbars } from 'react-custom-scrollbars';
import uniqid from 'uniqid';
import { InitialStateType } from '../types';

const RenderUI = (props: InitialStateType): JSX.Element => {
  const { examsData } = props;
  const gre = useRef();
  const ielts = useRef();
  const gmat = useRef();
  const sat = useRef();
  const toefl = useRef();
  const bocconi = useRef();
  const refs = [toefl, sat, ielts, gre, bocconi, gmat];
  const { tabs } = useTabs(toefl, sat, ielts, gre, bocconi, gmat);
  const dataName = ['toefl', 'sat', 'ielts', 'gre', 'bocconi', 'gmat'];

  return (
    <ContentContainer className="exams__container">
      <ContentContainer className="exams">
        <ContentContainer className="exams__content">
          {examsData &&
            examsData.map((item: any, index: number) => (
              <div
                className={`exams__list${index}`}
                ref={refs[index]}
                key={uniqid()}
              >
                <div
                  className={`exams__list${index}--tab`}
                  data-name={dataName[index]}
                  onClick={tabs}
                >
                  {item.title}
                </div>
                <Scrollbars
                  renderThumbVertical={() => (
                    <div style={{ background: '#474642' }} />
                  )}
                >
                  <div className="exams__body">{parse(item.body)}</div>
                </Scrollbars>
              </div>
            ))}
        </ContentContainer>
      </ContentContainer>
    </ContentContainer>
  );
};

export default RenderUI;
