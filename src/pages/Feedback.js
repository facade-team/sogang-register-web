import React from 'react';
import '../styles/Feedback.css';

const Feedback = () => {
  return (
    <div className="App">
      <div className="topbar">
        <div className="font2">피드백 / 문의</div>
        <div style={{ display: 'inline' }}>
          <button
            className="loginbtn"
            onClick={() => {
              console.log('loginbtn!');
            }}
          >
            로그인
          </button>
        </div>
      </div>

      <div className="mainpage">
        <div className="introduce">
          <div className="font3">안녕하세요! 팀소개 어쩌구저쩌구</div>
        </div>
        <div className="font4">✉️ 이메일</div>
        <input className="onelineInput"></input>
        <div className="font4">📄 제목</div>
        <input className="onelineInput"></input>
        <div className="font4">✏️ 내용</div>
        <textarea className="multilineInput"></textarea>
        <div>
          <button
            className="submitbtn"
            onClick={() => {
              console.log('submitted');
            }}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
