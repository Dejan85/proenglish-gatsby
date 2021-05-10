import React, { useState, useEffect } from 'react';
import Pagination from 'rc-pagination';
import { answers, questionsA1, questionsCorrectAnswers } from './constants';
import RadioBox from './RadioBox';
import 'rc-pagination/assets/index.css';
import EnterTestModal from './EnterTestModal';
import ShowResultPate from './ShowResultPage';
// import useForm from '../../hooks/auth/useForm';
import './styles.scss';

// import publicIp from "public-ip";

// export const getClientIp = async () => await publicIp.v4({
//   fallbackUrls: [ "https://ifconfig.co/ip" ]
// });

const renderQuestions = (questions, onChangeHandler, page, answersState) => {
  return questions.map((item, index) => {
    return (
      page === item.page && (
        <div key={index} className="initialTest__questions_box">
          <h2 className="initialTest__h2">{item.question}</h2>
          {answers.map((item2, index2) => {
            if (item.answer[index2]) {
              return (
                <div key={index2} className="initialTest__radio_box">
                  <RadioBox
                    value={item2}
                    text={item.answer[index2]}
                    name={index}
                    onChange={onChangeHandler}
                    checkedProp={item2 === answersState[index]}
                  />
                </div>
              );
            }
          })}
        </div>
      )
    );
  });
};

const InitialTest = (): JSX.Element => {
  // const { input, error, onChange, onSubmit } = useForm();
  const [answersState, setAnswersState] = useState({});
  const [page, setPage] = useState(1);
  const [resultState, setResultState] = useState();
  const [showModal, setShowModal] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [endTestMsg, setEndTestMsg] = useState('A1');
  const a1 = new Set();
  const a2 = new Set();
  const b1 = new Set();
  const b2 = new Set();
  const c1 = new Set();

  const [a1Pass, setA1Pass] = useState(false);
  const [a2Pass, setA2Pass] = useState(false);
  const [b1Pass, setB1Pass] = useState(false);
  const [b2Pass, setB2Pass] = useState(false);
  const [c1Pass, setC1Pass] = useState(false);

  const [reset] = useState(() => window.scrollTo(0, 0));

  const resetPageScroll = () => window.scrollTo(0, 0);

  const onChangeHandler = (e) => {
    setAnswersState({
      ...answersState,
      ...{ [e.target.name]: e.target.value },
    });
  };

  useEffect(() => {
    const result = questionsCorrectAnswers.filter(
      (item, index) => item[index] === answersState[index],
    );

    setResultState(result);
  }, [answersState]);

  const testHandler = (item, frstParam, secondParam) => {
    if (!secondParam && Object.keys(item)[0] <= frstParam) {
      a1.add(item);

      if ([...a1].length >= 5) {
        if (!a1Pass) {
          setA1Pass(true);
        }
      }
    }

    if (
      secondParam &&
      Object.keys(item)[0] > frstParam &&
      Object.keys(item)[0] <= secondParam
    ) {
      switch (secondParam) {
        case 16:
          a2.add(item);
          break;
        case 24:
          b1.add(item);
          break;
        case 32:
          b2.add(item);
          break;
        default:
          c1.add(item);
      }

      if ([...a2].length >= 5) {
        if (!a2Pass) {
          setA2Pass(true);
        }
      }

      if ([...b1].length >= 5) {
        if (!b1Pass) {
          setB1Pass(true);
        }
      }

      if ([...b2].length >= 5) {
        if (!b2Pass) {
          setB2Pass(true);
        }
      }

      if ([...c1].length >= 5) {
        if (!c1Pass) {
          setC1Pass(true);
        }
      }
    }
  };

  useEffect(() => {
    // console.log("test", a1Pass, a2Pass, b1Pass, b2Pass, c1Pass);
    if (a1Pass) {
      setEndTestMsg('A1');
    }
    if (a2Pass) {
      setEndTestMsg('A2');
    }
    if (b1Pass) {
      setEndTestMsg('B1');
    }
    if (b2Pass) {
      setEndTestMsg('B2');
    }
    if (c1Pass) {
      setEndTestMsg('C1');
    }
  }, [a1Pass, a2Pass, b1Pass, b2Pass, c1Pass]);

  const testDoneHandler = () => {
    resultState?.forEach((item) => {
      testHandler(item, 8);
      testHandler(item, 8, 16);
      testHandler(item, 16, 24);
      testHandler(item, 24, 32);
      testHandler(item, 32, 40);
    });

    showResultHandler();
  };

  const onChangePagination = (page) => {
    setPage(page);
    resetPageScroll();
  };

  const showModalHandler = () => {
    setShowModal(false);
  };

  const showResultHandler = () => {
    setShowResult(true);
  };

  return (
    (showModal && (
      <EnterTestModal
        showModalHandler={showModalHandler}
        // input={input}
        // error={error}
        // onChange={onChange}
        // onSubmit={onSubmit}
      />
    )) ||
    (showResult && <ShowResultPate endTestMsg={endTestMsg} />) || (
      <div className="initialTest">
        {reset}
        <div className="initialTest__container">
          {renderQuestions(questionsA1, onChangeHandler, page, answersState)}
        </div>

        <div className="initialTest__btn_container">
          {page === 5 && (
            <form
              name="testDone"
              style={{ width: '100%' }}
              onSubmit={(e) => {
                e && e.preventDefault();
                // testDoneHandler();
                // onSubmit(e, null, endTestMsg);
              }}
            >
              <button type="button" className="initialTest__btn">
                Zavrsi Test
              </button>
            </form>
          )}
        </div>

        <div className="initialTest__pagination">
          <Pagination
            onChange={onChangePagination}
            current={page}
            pageSize={8}
            total={40}
          />
        </div>
      </div>
    )
  );
};

export default InitialTest;
