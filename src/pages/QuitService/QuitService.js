import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

//hooks
import useInput from '../../hooks/useInput';

//component
import GradationBtn from '../../components/GradationBtn/GradationBtn';
import Title from '../../components/Title/Title';

//context
import { useAuthContext } from '../../contexts/AuthContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';

//styled
import {
  ContainerBox,
  Input,
  FormContainer,
  FormGroup,
  Label,
} from '../ChangePassword/ChangePassword.element';
import {
  Container,
  HomeContainer as MyPageContainer,
} from '../../styles/HomeContainer';

const ChangePassword = ({ openModal }) => {
  let history = useHistory();
  const { isAuth, userData, logout } = useAuthContext();
  const { setSnackBar } = useSnackBarContext();
  const [passwordFail, setPasswordFail] = useState({
    value: false,
    message: '',
  });
  const [form, onChangeForm] = useInput({
    email: '',
    username: '',
    password: '',
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
    if (isAuth) {
      if (email === userData.email && username === userData.username) {
        axios
          .post('/privacy/dropout', {
            email,
            username,
            password,
          })
          .then((res) => {
            if (res.status === 201) {
              logout();
              history.push('/');
              setSnackBar({
                type: 'success',
                msg: '탈퇴가 완료되었습니다. 다음에 다시 찾아주세요!',
              });
            } else if (res.status === 401) {
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              setSnackBar({
                type: 'success',
                msg: '탈퇴에 실패하였습니다.',
              });
            }
          });
      } else {
        setSnackBar({
          type: 'error',
          msg: '입력 정보가 올바르지 않습니다',
        });
      }
    }
  };

  const { password, username, email } = form;

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지/비밀번호 변경" openModal={openModal}></Title>
        {isAuth ? (
          <ContainerBox>
            <FormContainer>
              <FormGroup>
                <Label htmlFor="email">이메일</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={onChangeForm}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="username">이름</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={onChangeForm}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">비밀번호 확인</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
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
