import React from 'react';
import { Link } from 'react-router-dom';

import useInput from '../../hooks/useInput';

import {
  FormContainer,
  FormGroup,
  CustomGradationBtnComp,
} from './ModalForm.element';

import { useAuthContext } from '../../contexts/AuthContext';

const ModalForm = ({ modalType, setModalType, setShowModal }) => {
  const [user, onChangeInput] = useInput({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const { login } = useAuthContext();

  const submitHandler = (e) => {
    e.preventDefault();
    login(user);
  };
  return (
    <FormContainer onSubmit={submitHandler}>
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

      <CustomGradationBtnComp active>로그인</CustomGradationBtnComp>
      <div>
        <Link to="/join" onClick={() => setShowModal(false)}>
          <span>회원가입</span>
        </Link>
      </div>
      {/* <Seperator>
            <div></div>
            <p>또는 간편로그인</p>
            <div></div>
          </Seperator> */}
    </FormContainer>
  );
};

export default ModalForm;
