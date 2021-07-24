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
  return (
    <>
      <TopBar>
        <Font2>피드백 / 문의</Font2>
      </TopBar>

      <MainPage>
        <Introduce>
          <Font3>안녕하세요! 팀소개 어쩌구저쩌구</Font3>
        </Introduce>
        <Font4>✉️ 이메일</Font4>
        <OneLineInput />
        <Font4>📄 제목</Font4>
        <OneLineInput />
        <Font4>✏️ 내용</Font4>
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
