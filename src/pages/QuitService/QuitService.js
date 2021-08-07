import React, { useState } from 'react';
import axios from 'axios';

//hooks
import useInput from '../../hooks/useInput';

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
} from '../ChangePassword/ChangePassword.element';
import {
  Container,
  HomeContainer as MyPageContainer,
} from '../../styles/HomeContainer';

const ChangePassword = ({ openModal }) => {
  const [passwordFail, setPasswordFail] = useState({
    value: false,
    message: '',
  });
  const [form, onChangeForm] = useInput({
    currentPassword: '',
    newPassword: '',
    checkPassword: '',
  });

  const onClick = (e) => {
    if (newPassword === checkPassword) {
      axios
        .post('/privacy/passwordchange', {
          old_password: currentPassword,
          new_password: currentPassword,
        })
        .then((res) => {
          if (res.status === 201) {
            console.log(res);
          } else if (res.status === 401) {
            setPasswordFail({ value: true, message: res.message });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setPasswordFail({
        value: true,
        message: '새 비밀번호와 비밀번호 확인이 일치하지 않습니다',
      });
    }
  };

  const { currentPassword, newPassword, checkPassword } = form;

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지/비밀번호 변경" openModal={openModal}></Title>
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
            {passwordFail.value ? (
              <>
                <p>{passwordFail.message}</p>
                <br></br>
              </>
            ) : (
              <br></br>
            )}
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
      </MyPageContainer>
    </Container>
  );
};

export default ChangePassword;
