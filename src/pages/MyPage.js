import React, { useState } from 'react';
import '../styles/MyPage.css';
import {
  Topbar,
  Font2,
  LoginBtn,
  Mainpage,
  ProfileInfo,
  ProfilePic,
  ProfileName,
  InputArea,
  InputBlank,
  InputBox,
  EmailSendCheck,
  Checkbox,
  EditBtn,
} from './MyPage.element';

const MyPage = () => {
  //eslint-disable-next-line
  const [EmailSend, setEmailSend] = useState('no');

  return (
    <div className="App" style={{ width: '90%' }}>
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
