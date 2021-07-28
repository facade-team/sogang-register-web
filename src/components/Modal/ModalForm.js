import React, { useState } from 'react';

import useInput from '../../hooks/useInput';

import {
  FormContainer,
  FormGroup,
  SubmitBtn,
  MailAllow,
  CustomGradationBtnComp,
} from './ModalForm.element';

const ModalForm = ({ handleLogin, modalType, setModalType }) => {
  const [user, onChangeInput] = useInput({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = user;
  const passwordTest = '';
  const [checkboxValue, setCheckboxValue] = useState(true);
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(user);
  };
  return (
    <FormContainer onSubmit={submitHandler}>
      {/* {modalType === 'login' ? <Title>LOGIN</Title> : <Title>SIGN UP</Title>} */}
      {modalType === 'signup' && (
        <FormGroup>
          <label htmlFor="name">이름</label>
          <input
            type="name"
            name="name"
            value={name}
            onChange={onChangeInput}
          />
        </FormGroup>
      )}
      <FormGroup>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeInput}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeInput}
        />
      </FormGroup>
      {modalType === 'signup' && (
        <FormGroup>
          <label htmlFor="password">비밀번호 재입력</label>
          <input
            type="password"
            name="passwordTest"
            value={passwordTest}
            onChange={onChangeInput}
          />
        </FormGroup>
      )}
      {modalType === 'login' ? (
        <>
          <CustomGradationBtnComp active>로그인</CustomGradationBtnComp>
          <div>
            <span onClick={() => setModalType('signup')}>회원가입</span>
          </div>
          {/* <Seperator>
            <div></div>
            <p>또는 간편로그인</p>
            <div></div>
          </Seperator> */}
        </>
      ) : (
        <>
          <MailAllow>
            <label for="allow" style={{ fontSize: '10px' }}>
              즐겨찾기한 교과목의 정보 업데이트 시 이메일 수신에 동의합니다.
            </label>
            <input
              type="checkbox"
              name="admit"
              id="allow"
              checked={checkboxValue}
              onChange={() => setCheckboxValue(!checkboxValue)}
            />
          </MailAllow>

          <CustomGradationBtnComp active>회원가입</CustomGradationBtnComp>
        </>
      )}
    </FormContainer>
  );
};

export default ModalForm;
