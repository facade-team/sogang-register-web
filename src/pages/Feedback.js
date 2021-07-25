import React from 'react';
import '../styles/Feedback.css';
import {
  TopBar,
  Font2,
  LogInBtn,
  MainPage,
  Introduce,
  Font3,
  Font4,
  OneLineInput,
  MultiLineInput,
  SubmitBtn,
} from './Feedback.element';

const Feedback = () => {
  const TextIn = (props) => {
    return props.type === '2' ? (
      <Font2>{props.name}</Font2>
    ) : props.type === '3' ? (
      <Font3>{props.name}</Font3>
    ) : (
      <Font4>{props.name}</Font4>
    );
  };

  return (
    <>
      {/* <TopBar>
        <TextIn name="피드백 / 문의" type="2" />
      </TopBar> */}

      <MainPage>
        <Introduce>
          <TextIn name="안녕하세요! 팀소개 어쩌구저쩌구" type="3" />
        </Introduce>
        <TextIn name="✉️ 이메일" type="4" />
        <OneLineInput />
        <TextIn name="📄 제목" type="4" />
        <OneLineInput />
        <TextIn name="✏️ 내용" type="4" />
        <MultiLineInput />
        <div>
          <SubmitBtn
            onClick={() => {
              console.log('submitted');
            }}
          >
            submit
          </SubmitBtn>
        </div>
      </MainPage>
    </>
  );
};

export default Feedback;
