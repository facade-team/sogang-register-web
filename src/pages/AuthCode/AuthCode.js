import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';

//hooks
import useInput from '../../hooks/useInput';

//component
import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Title from '../../components/Title/Title';

//styled
import {
  ContainerBox,
  FormContainer,
} from '../ChangePassword/ChangePassword.element';
import {
  Container,
  HomeContainer as MyPageContainer,
} from '../../styles/HomeContainer';
import { FormGroup, Input } from './AuthCode.element.js';

const AuthCode = ({ openModal }) => {
  let history = useHistory();
  const { setSnackBar } = useSnackBarContext();
  const { isAuth, userData } = useAuthContext();
  const [form, onChangeForm] = useInput({
    code: '',
  });

  const { code } = form;

  useEffect(() => {
    if (!isAuth) {
      setSnackBar({ type: 'error', msg: '로그인이 필요합니다.' });
    }
  }, [isAuth]);

  const onClick = (e) => {
    if (isAuth) {
      axios
        .post('/user/confirmsecret', {
          email: userData.email,
          script: code,
        })
        .then((res) => {
          history.push('/mypage');
          setSnackBar({
            type: 'success',
            msg: '이메일 인증에 성공하였습니다.',
          });
        })
        .catch((err) => {
          if (err.response.status === 401 || err.response.status === 402) {
            setSnackBar({
              type: 'error',
              msg: '123',
            });
          } else {
            setSnackBar({
              type: 'error',
              msg: '인증에 실패했습니다.',
            });
          }
        });
    } else {
      setSnackBar({
        type: 'error',
        msg: '로그인해주세요',
      });
    }
  };

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지/이메일 인증" openModal={openModal}></Title>
        {isAuth ? (
          <ContainerBox>
            <FormContainer>
              <p>이메일 인증코드를 입력해주세요</p>
              <br></br>
              <FormGroup>
                <Input
                  tyle="email"
                  value={userData.email}
                  onChange={onChangeForm}
                  readOnly
                ></Input>
              </FormGroup>
              <FormGroup>
                <Input
                  value={code}
                  placeholder="인증코드"
                  onChange={onChangeForm}
                />
              </FormGroup>
              <br></br>
              <GradationBtn
                width={200}
                borderRadius={20}
                active
                onClick={onClick}
              >
                확인
              </GradationBtn>
            </FormContainer>
          </ContainerBox>
        ) : null}
      </MyPageContainer>
    </Container>
  );
};

export default AuthCode;
