import React, { useState } from 'react';
import '../styles/MyPage.css';

const MyPage = () => {
  //eslint-disable-next-line
  const [EmailSend, setEmailSend] = useState('no');

  return (
    <div className="App">
      <div className="topbar">
        <div className="font2">마이페이지</div>
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
        <div className="profileinfo">
          <span className="profilepic" />
          <div className="profilename">김문기</div>
        </div>

        <div className="inputarea">
          <div className="inputblank">
            <span style={{ marginRight: '5px', fontSize: '18px' }}>이메일</span>
            <span>
              <input className="inputbox"></input>
            </span>
          </div>
          <div className="inputblank">
            <span
              style={{
                marginRight: '12px',
                marginLeft: '6px',
                fontSize: '18px',
              }}
            >
              전공
            </span>
            <span>
              <input className="inputbox"></input>
            </span>
          </div>
        </div>

        <div className="emailsendcheck">
          <input
            type="checkbox"
            className="checkbox"
            onClick={() => {
              setEmailSend('yes');
            }}
          />
          <span>
            즐겨찾기한 과목의 교과목 정보가 변경되면 이메일 알림을 수신합니다.
          </span>
        </div>

        <div className="editbtnarea">
          <button className="editbtn">프로필 수정</button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
