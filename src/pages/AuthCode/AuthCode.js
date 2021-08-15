import React, { useState, useEffect } from 'react';
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

import {
  JoinFormContainer,
  EmailCheckBtn,
  Div,
  FormGroup,
} from '../../components/JoinForm/JoinForm.element';
import { useLoadingContext } from '../../contexts/LoadingContext';

const AuthCode = ({ openModal }) => {
  let history = useHistory();
  const { setSnackBar } = useSnackBarContext();
  const { isAuth, userData } = useAuthContext();
  const [verifyCode, setVerifyCode] = useState('');

  const onChangeVerifyCode = (e) => {
    setVerifyCode(e.target.value);
  };

  useEffect(() => {
    if (!isAuth) {
      setSnackBar({ type: 'error', msg: '로그인이 필요합니다.' });
    }
  }, [isAuth]);

  const { setLoading } = useLoadingContext();

  // 인증코드 발송함수
  const sendVerifyCode = (e) => {
    e.preventDefault();
    if (isAuth) {
      setLoading(true);
      axios
        .post('/user/gensecret', {
          email: userData.email,
        })
        .then((res) => {
          if (res.status === 201) {
            setSnackBar({
              msg: '인증코드가 이메일로 발송되었습니다. 메일이 오지 않았다면 스팸메일함을 확인해주세요',
              type: 'success',
            });
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          setSnackBar({
            msg: '다시 시도해주십시오',
            type: 'error',
          });
        });
    } else {
      setSnackBar({
        type: 'error',
        msg: '로그인해주세요',
      });
    }
  };

  // 인증코드 일치확인 함수
  const checkVerifyCode = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/user/confirmsecret', {
        email: userData.email,
        script: verifyCode,
      })
      .then((res) => {
        if (res.status === 201) {
          setSnackBar({
            msg: '이메일 인증이 완료되었습니다.',
            type: 'success',
          });

          history.push('/');

          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 401) {
          setSnackBar({
            msg: '인증코드가 불일치합니다.',
            type: 'error',
          });
        } else if (err.response.status === 402) {
          setSnackBar({
            msg: '해당하는 이메일이 존재하지 않습니다.',
            type: 'error',
          });
        }
      });
  };

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지/이메일 인증" openModal={openModal}></Title>
        {isAuth ? (
          <JoinFormContainer>
            <FormGroup style={{ marginTop: '50px' }}>
              <p style={{ textAlign: 'center', lineHeight: 1.5 }}>
                가입하신 이메일 {userData.email} 로 <br />
                인증코드를 발송합니다.
              </p>
            </FormGroup>
            <EmailCheckBtn onClick={sendVerifyCode} bgColor="#9c88ff" mb="20">
              인증코드 발송
            </EmailCheckBtn>
            <FormGroup>
              <Div>
                <label htmlFor="verifyCode">인증코드</label>
                {verifyCode ? (
                  <EmailCheckBtn onClick={checkVerifyCode} bgColor="#10ac84">
                    인증코드 확인
                  </EmailCheckBtn>
                ) : (
                  <EmailCheckBtn onClick={checkVerifyCode} bgColor="#838383">
                    인증코드 확인
                  </EmailCheckBtn>
                )}
              </Div>
              <input
                required
                type="text"
                id="verifyCode"
                name="verifyCode"
                value={verifyCode}
                onChange={onChangeVerifyCode}
              />
            </FormGroup>
          </JoinFormContainer>
        ) : null}
      </MyPageContainer>
    </Container>
  );
};

export default AuthCode;
