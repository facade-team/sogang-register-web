import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { FaCheckSquare } from 'react-icons/fa';

import { useAuthContext } from '../../contexts/AuthContext';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';

// Styled
import {
  JoinFormContainer,
  FormGroup,
  MailAllow,
  Div,
  BtnDiv,
  EmailCheckBtn,
  Sup,
} from './JoinForm.element';

// Components
import { CustomGradationBtnComp } from '../FeedbackForm/Feedback.element';

// Validator (정규식)
import { isEmail, isPassword } from '../../utils/validator';

// 전공 리스트
import majorsPair from '../../utils/majorPair';

const JoinForm = () => {
  const [name, setName] = useState('');
  const [major, setMajor] = useState(false);
  const [email, setEmail] = useState('');
  const [canUseEmail, setCanUseEmail] = useState(false);
  const [verifyCode, setVerifyCode] = useState('');
  const [password, setPassword] = useState('');
  const [passwordTest, setPasswordTest] = useState('');
  const [isJoined, setIsJoined] = useState(false);

  // 로딩스피너 띄우기
  const { setLoading } = useLoadingContext();

  // 스낵바 context
  const { setSnackBar } = useSnackBarContext();

  const { login } = useAuthContext();

  let history = useHistory();

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeMajor = (e) => {
    const selectedMajor = e.map((items) => items.value); // 배열형태
    if (selectedMajor.length === 0) {
      setMajor(false);
    } else {
      setMajor(selectedMajor);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangeVerifyCode = (e) => {
    setVerifyCode(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangePasswordTest = (e) => {
    setPasswordTest(e.target.value);
  };

  // Email 유효성 확인
  const [isValidEmail, setIsValidEmail] = useState(false);
  useEffect(() => {
    const emailValid = isEmail(email);
    if (emailValid) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  }, [email]);

  // email 중복 확인 함수
  const checkUsedEmail = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      setLoading(true);
      axios
        .post('/user/canuse', {
          email,
        })
        .then((res) => {
          setLoading(false);
          if (res.status === 201) {
            setCanUseEmail(true);
            setSnackBar({
              msg: '사용가능한 이메일입니다',
              type: 'success',
            });
          }
        })
        .catch((err) => {
          setLoading(false);
          if (err.response.status === 401) {
            setCanUseEmail(false);
            setSnackBar({
              msg: '중복된 이메일입니다',
              type: 'error',
            });
          } else {
            setSnackBar({
              msg: '다시 시도해주십시오',
              type: 'error',
            });
          }
          console.log(err);
        });
    }
  };

  // 인증코드 발송 함수
  const sendVerifyCode = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/user/gensecret', {
        email,
      })
      .then((res) => {
        if (res.status === 201) {
          setSnackBar({
            msg: '인증코드가 이메일로 발송되었습니다.',
            type: 'success',
          });
          setLoading(false);
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

  // 인증코드 일치확인 함수
  const checkVerifyCode = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post('/user/confirmsecret', {
        email: email,
        script: verifyCode,
      })
      .then((res) => {
        if (res.status === 201) {
          setSnackBar({
            msg: '이메일 인증이 완료되었습니다.',
            type: 'success',
          });
          login({ email, password })
            .then(() => {
              history.push('/');
              setSnackBar({
                msg: '환영합니다',
                type: 'success',
              });
              setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              console.log(err);
            });
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
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

  // password 유효성 확인
  const [isValidPassword, setIsValidPassword] = useState(false);

  useEffect(() => {
    const passwordValid = isPassword(password);
    if (passwordValid) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  }, [password]);

  // 이메일 수신 동의 체크박스
  const [checkboxValue, setCheckboxValue] = useState(true);

  // 비밀번호 일치여부 확인

  const [isMatchPassword, setIsMatchPassword] = useState(false);

  useEffect(() => {
    if (password === passwordTest) {
      setIsMatchPassword(true);
    } else {
      setIsMatchPassword(false);
    }
  }, [passwordTest, password]);

  // 회원가입 핸들러
  const joinHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    if (name && canUseEmail && isValidPassword && isMatchPassword) {
      axios
        .post('/user/register', {
          email: email,
          username: name,
          password: password,
          major: major,
          allow_email: checkboxValue,
        })
        .then((res) => {
          if (res.status === 201) {
            setLoading(false);
            setIsJoined(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          if (err.response.status === 401) {
            setSnackBar({
              msg: '이미 가입된 email 주소입니다',
              type: 'error',
            });
          } else if (err.response.status === 402) {
            setSnackBar({
              msg: 'email 형식이 맞지 않습니다.',
              type: 'error',
            });
          }
        });
    } else if (!canUseEmail) {
      setLoading(false);
      setSnackBar({
        msg: '이메일 중복확인을 해주세요',
        type: 'error',
      });
    } else {
      setLoading(false);
      setSnackBar({
        msg: '입력항목을 다시 확인해주세요',
        type: 'error',
      });
    }
  };

  return (
    <>
      {!isJoined ? (
        <JoinFormContainer onSubmit={joinHandler}>
          <FormGroup>
            <Div>
              <label htmlFor="name">
                이름<Sup>*필수</Sup>
              </label>
              {name ? (
                <FaCheckSquare size="20" color="#10ac84"></FaCheckSquare>
              ) : null}
            </Div>
            <input
              required
              type="name"
              name="name"
              value={name}
              onChange={onChangeName}
            />
          </FormGroup>
          <FormGroup>
            <Div>
              <label htmlFor="major">전공 (복수선택가능)</label>
              {major ? (
                <FaCheckSquare size="20" color="#10ac84"></FaCheckSquare>
              ) : null}
            </Div>
            <Select
              options={majorsPair}
              isSearchable
              isClearable
              isMulti
              placeholder="전공검색"
              onChange={onChangeMajor}
            ></Select>
          </FormGroup>
          <FormGroup>
            <Div>
              <label htmlFor="email">
                이메일<Sup>*필수</Sup>
              </label>
              <BtnDiv>
                {email ? (
                  isValidEmail ? (
                    canUseEmail ? (
                      <FaCheckSquare size="20" color="#10ac84"></FaCheckSquare>
                    ) : (
                      <EmailCheckBtn onClick={checkUsedEmail} bgColor="#9c88ff">
                        중복확인
                      </EmailCheckBtn>
                    )
                  ) : (
                    <span style={{ color: '#d63031' }}>
                      이메일 형식이 올바르지 않습니다.
                    </span>
                  )
                ) : null}
              </BtnDiv>
            </Div>

            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
              disabled={canUseEmail}
            />
          </FormGroup>

          <FormGroup>
            <Div>
              <label htmlFor="password">
                비밀번호<Sup>*필수</Sup>
              </label>
              {password ? (
                isValidPassword ? (
                  <FaCheckSquare size="20" color="#10ac84"></FaCheckSquare>
                ) : (
                  <span style={{ color: '#ee5253' }}>
                    6자 이상의 영문자+숫자여야 합니다.
                  </span>
                )
              ) : null}
            </Div>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </FormGroup>
          <FormGroup>
            <Div>
              <label htmlFor="passwordTest">
                비밀번호 확인<Sup>*필수</Sup>
              </label>
              {passwordTest ? (
                isMatchPassword ? (
                  <FaCheckSquare size="20" color="#10ac84"></FaCheckSquare>
                ) : (
                  <span style={{ color: '#ee5253' }}>
                    비밀번호가 일치하지 않습니다.
                  </span>
                )
              ) : null}
            </Div>
            <input
              required
              type="password"
              name="passwordTest"
              value={passwordTest}
              onChange={onChangePasswordTest}
            />
          </FormGroup>
          <MailAllow>
            <label htmlFor="allow" style={{ fontSize: '10px' }}>
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
          <CustomGradationBtnComp
            onClick={null}
            top={null}
            borderRadius={12}
            active
          >
            회원가입
          </CustomGradationBtnComp>
        </JoinFormContainer>
      ) : (
        // 회원가입 후 이메일 인증 폼
        <JoinFormContainer>
          <FormGroup style={{ marginTop: '50px' }}>
            <p style={{ textAlign: 'center', lineHeight: 1.5 }}>
              입력하신 이메일 {email} 로 <br />
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
              ) : null}
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
      )}
    </>
  );
};

export default JoinForm;
