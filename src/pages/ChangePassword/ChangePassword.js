import React, { useState, useEffect } from 'react';
import axios from 'axios';

//hooks
import useInput from '../../hooks/useInput';

//context
import { useSnackBarContext } from '../../contexts/SnackBarContext';
import { useAuthContext } from '../../contexts/AuthContext';

//component
import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Title from '../../components/Title/Title';

//styled
import {
  ContainerBox,
  Input,
  FormContainer,
  FormGroup,
  Label,
} from './ChangePassword.element';
import {
  Container,
  HomeContainer as MyPageContainer,
} from '../../styles/HomeContainer';

const ChangePassword = ({ openModal }) => {
  const { setSnackBar } = useSnackBarContext();
  const { isAuth, userData } = useAuthContext();
  const [form, onChangeForm] = useInput({
    currentPassword: '',
    newPassword: '',
    checkPassword: '',
  });

  //useEffect
  useEffect(() => {
    if (!isAuth) {
      openModal();
      setSnackBar({
        type: 'error',
        msg: '로그인이 필요합니다.',
      });
    }
  }, [isAuth]);

  const onClick = (e) => {
    if (newPassword === checkPassword) {
      axios
        .post('/privacy/passwordchange', {
          old_password: currentPassword,
          new_password: newPassword,
        })
        .then((res) => {
          setSnackBar({
            type: 'success',
            msg: '새로운 비밀번호로 변경되었습니다.',
          });
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 401) {
            setSnackBar({
              type: 'error',
              msg: '이전 비밀번호가 일치하지 않습니다.',
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
        msg: '새 비밀번호와 비밀번호 확인이 일치하지 않습니다',
      });
    }
  };

  const { currentPassword, newPassword, checkPassword } = form;

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지/비밀번호 변경" openModal={openModal}></Title>
        {isAuth ? (
          <ContainerBox>
            <FormContainer>
              <FormGroup>
                <Label htmlFor="currentPassword">현재 비밀번호</Label>
                <Input
                  type="password"
                  name="currentPassword"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={onChangeForm}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="newPassword">새 비밀번호</Label>
                <Input
                  type="password"
                  name="newPassword"
                  id="newPassword"
                  value={newPassword}
                  onChange={onChangeForm}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="checkPassword">새 비밀번호 확인</Label>
                <Input
                  type="password"
                  name="checkPassword"
                  id="checkPassword"
                  value={checkPassword}
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

export default ChangePassword;
