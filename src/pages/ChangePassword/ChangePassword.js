import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//hooks
import useInput from '../../hooks/useInput';

//context
import { useSnackBarContext } from '../../contexts/SnackBarContext';
import { useAuthContext } from '../../contexts/AuthContext';
import { useLoadingContext } from '../../contexts/LoadingContext';

//component
import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Title from '../../components/Title/Title';

//styled
import {
  ContainerBox,
  Input,
  FormContainer,
  FormGroup,
  Form,
  Label,
} from './ChangePassword.element';
import { JoinFormContainer } from '../../components/JoinForm/JoinForm.element';
import {
  Container,
  HomeContainer as MyPageContainer,
} from '../../styles/HomeContainer';

const ChangePassword = ({ openModal }) => {
  let history = useHistory();
  const { setSnackBar } = useSnackBarContext();
  const { isAuth, userData } = useAuthContext();
  const { setLoading } = useLoadingContext();
  const [form, onChangeForm] = useInput({
    email: userData ? userData.email : '',
    name: '',
    currentPassword: '',
    newPassword: '',
    checkPassword: '',
    verifyCode: '',
  });

  const { email, name, currentPassword, newPassword, checkPassword } = form;

  const onClick = (e) => {
    if (newPassword === checkPassword) {
      setLoading(true);
      axios
        .post('/privacy/passwordchange', {
          old_password: currentPassword,
          new_password: newPassword,
        })
        .then((res) => {
          setLoading(false);
          history.push('/mypage');
          setSnackBar({
            type: 'success',
            msg: '새로운 비밀번호로 변경되었습니다.',
          });
        })
        .catch((err) => {
          setLoading(false);
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

  // 인증코드 발송 함수
  const resetPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/privacy/passwordreset', {
        email,
        username: name,
      })
      .then((res) => {
        if (res.status === 201) {
          setSnackBar({
            msg: '임시비밀번호가 이메일로 발송되었습니다.',
            type: 'success',
          });
          setLoading(false);
          history.push('/');
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setSnackBar({
          msg: '다시 시도해주십시오',
          type: 'error',
        });
      });
  };

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지/비밀번호 변경" openModal={openModal}></Title>
        <ContainerBox>
          <FormContainer>
            <Form>
              {isAuth ? (
                <>
                  <FormGroup>
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      required
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={onChangeForm}
                      readOnly
                    />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="currentPassword">현재 비밀번호</Label>
                    <Input
                      required
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
                      required
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
                      required
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
                </>
              ) : (
                <>
                  <FormGroup>
                    <Label htmlFor="email">이메일</Label>
                    <Input
                      required
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={onChangeForm}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="name">이름</Label>
                    <Input
                      required
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={onChangeForm}
                    />
                  </FormGroup>
                  <br></br>
                  <GradationBtn
                    width={200}
                    borderRadius={20}
                    active
                    onClick={resetPassword}
                  >
                    확인
                  </GradationBtn>
                </>
              )}
            </Form>
          </FormContainer>
        </ContainerBox>
      </MyPageContainer>
    </Container>
  );
};

export default ChangePassword;
