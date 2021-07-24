import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/MyPage.css';

const Topbar = styled.div`
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

const Loginbtn = styled.button`
  height: 30px;
  width: 130px;
  background-color: rgba(182, 6, 0, 0.6);
  border-radius: 10px;
  color: #ffffff;
  border: none;
`;

const Mainpage = styled.div`
  background: #ffffff;
  margin-left: 30px;
  width: 90vw;
  height: 876px;
  max-height: 85vh;
  border-radius: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const ProfileInfo = styled.div`
  padding-top: 150px;
  margin-bottom: 20px;
`;

const ProfilePic = styled.span`
  width: 135px;
  height: 135px;
  background-image: '../assets/images/profile_pic.jpg';
  background-size: 135px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  justify-self: center;
  display: inline-block;
`;

const ProfileName = styled.div`
  margin-top: 20px;
  font-size: 24px;
  line-height: 40px;
`;

const InputArea = styled.div`
  margin-bottom: 20px;
`;

const InputBlank = styled.div`
  margin-bottom: 20px;
`;

const InputBox = styled.input`
  width: 200px;
`;

const EmailSendCheck = styled.div`
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const EditBtn = styled.button`
  height: 40px;
  width: 130px;
  background-color: rgba(182, 6, 0, 0.6);
  border-radius: 10px;
  color: #ffffff;
  border: none;
  font-size: 20px;
`;

const MyPage = () => {
  //eslint-disable-next-line
  const [EmailSend, setEmailSend] = useState('no');

  return (
    <div className="App">
      <Topbar>
        <Font2>마이페이지</Font2>
        <div style={{ display: 'inline' }}>
          <Loginbtn
            onClick={() => {
              console.log('loginbtn!');
            }}
          >
            로그인
          </Loginbtn>
        </div>
      </Topbar>

      <Mainpage>
        <ProfileInfo>
          <ProfilePic />
          <ProfileName>김문기</ProfileName>
        </ProfileInfo>

        <InputArea>
          <InputBlank>
            <span style={{ marginRight: '5px', fontSize: '18px' }}>이메일</span>
            <span>
              <InputBox />
            </span>
          </InputBlank>
          <InputBlank>
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
              <InputBox />
            </span>
          </InputBlank>
        </InputArea>
        <EmailSendCheck>
          <Checkbox
            type="checkbox"
            onClick={() => {
              setEmailSend('yes');
            }}
          />
          <span>
            즐겨찾기한 과목의 교과목 정보가 변경되면 이메일 알림을 수신합니다.
          </span>
        </EmailSendCheck>

        <div className="editbtnarea">
          <EditBtn>프로필 수정</EditBtn>
        </div>
      </Mainpage>
    </div>
  );
};

export default MyPage;
