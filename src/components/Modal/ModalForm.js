import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useInput from '../../hooks/useInput';

import {
  FormContainer,
  FormGroup,
  CustomGradationBtnComp,
} from './ModalForm.element';

const ModalForm = ({ loginLogic, modalType, setModalType, setShowModal }) => {
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
    loginLogic(user);
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

      <>
        <CustomGradationBtnComp active>로그인</CustomGradationBtnComp>
        <div>
          {/* <span onClick={() => setModalType('signup')}>회원가입</span> */}
          <Link to="/join" onClick={() => setShowModal(false)}>
            <span>회원가입</span>
          </Link>
        </div>
        {/* <Seperator>
            <div></div>
            <p>또는 간편로그인</p>
            <div></div>
          </Seperator> */}
      </>
    </FormContainer>
  );
};

export default ModalForm;
