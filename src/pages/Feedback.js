import React from 'react';
import '../styles/Feedback.css';
import styled from 'styled-components';

const TopBar = styled.div`
  justify-content: space-between;
  margin-left: 46px;
  height: 65px;
  width: inherit;
`;

const Font2 = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: sans-serif;
  align-self: center;
  display: inline;
`;

const LogInBtn = styled.button`
  height: 30px;
  width: 130px;
  background-color: rgba(182, 6, 0, 0.6);
  border-radius: 10px;
  color: #ffffff;
  border: none;
`;

const MainPage = styled.div`
  background: #ffffff;
  margin-left: 30px;
  width: 90vw;
  height: 876px;
  max-height: 85vh;
  padding-left: 36px;
  padding-top: 20px;
  border-radius: 10px;
`;

const Introduce = styled.div`
  height: 10vh;
  min-height: 60px;
`;

const Font3 = styled.div`
  font-size: 28px;
  font-weight: bold;
  font-family: sans-serif;
`;

const Font4 = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const OneLineInput = styled.input`
  background-color: #f1ebeb;
  height: 35px;
  width: 80vw;
  margin-bottom: 30px;
  min-width: 200px;
  border: none;
  border-radius: 5px;
`;

const MultiLineInput = styled.textarea`
  background-color: #f1ebeb;
  min-width: 200px;
  width: 80vw;
  min-height: 20vh;
  height: 280px;
  border-radius: 5px;
  border: none;
  margin-bottom: 30px;
  resize: none;
`;

const SubmitBtn = styled.button`
  width: 80vw;
  min-width: 200px;
  height: 40px;
  background-color: rgba(182, 6, 0, 0.6);
  border-radius: 10px;
  font-size: 25px;
  color: #ffffff;
  border: none;
`;

const Feedback = () => {
  return (
    <>
      <TopBar>
        <Font2>피드백 / 문의</Font2>
        <div style={{ display: 'inline' }}>
          <LogInBtn
            onClick={() => {
              console.log('loginbtn!');
            }}
          >
            로그인
          </LogInBtn>
        </div>
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
