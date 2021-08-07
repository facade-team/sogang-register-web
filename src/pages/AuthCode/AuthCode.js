import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

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
  const [codeFail, setCodeFail] = useState({ value: false, message: '' });
  const [email, setEmail] = useState('sdfsdf');
  const [form, onChangeForm] = useInput({
    code: '',
  });

  const { code } = form;

  const onClick = (e) => {
    axios
      .post('/user/confirmsecret', {
        email,
        script: code,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log(res);
        } else if (res.status === 401 || res.status === 402) {
          setCodeFail({ value: true, message: res.message });
        }
      })
      .catch((err) => {
        console.log(err);
        setCodeFail({ value: true, message: '인증 코드가 잘 못 되었습니다.' });
      });
  };

  useEffect(() => {
    axios.get('/user').then((res) => {
      console.log(res.data);
      setEmail(res.data.email);
    });
  }, []);

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지/이메일 인증" openModal={openModal}></Title>
        <ContainerBox>
          <FormContainer>
            <p>이메일 인증코드를 입력해주세요</p>
            <br></br>
            <FormGroup>
              <Input
                tyle="email"
                value={email}
                onChange={onChangeForm}
                ReadOnly
              ></Input>
            </FormGroup>
            <FormGroup>
              <Input
                value={code}
                placeholder="인증코드"
                onChange={onChangeForm}
              />
            </FormGroup>
            {codeFail.value ? (
              <>
                <p>{codeFail.message}</p>
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

export default AuthCode;
