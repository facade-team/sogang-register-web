import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { FaCheckSquare } from 'react-icons/fa';

// Styled
import {
  JoinFormContainer,
  FormGroup,
  MailAllow,
  Div,
  EmailCheckBtn,
} from './JoinForm.element';

// Components
import { CustomGradationBtnComp } from '../FeedbackForm/Feedback.element';

// Validator (정규식)
import { isEmail, isPassword } from '../../utils/validator';

const JoinForm = () => {
  const [name, setName] = useState('');
  const [major, setMajor] = useState(false);
  const [email, setEmail] = useState('');
  const [verifyCode, setVerifyCode] = useState();
  const [password, setPassword] = useState('');
  const [passwordTest, setPasswordTest] = useState('');

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

  // email 중복 여부상태
  const [isUsed, setIsUsed] = useState(false);

  /* Todo : 중복확인 버튼 누르고 나서, 결과에 따라서 사용할 수 없는 이메일인지 사용가능한 이메일인지 표시
  사용할 수 있는 이메일이면, 인증코드 input 생기면서 인증코드 전송 버튼 렌더링
  (중간중간 토스트메시지 삽입)
  전송버튼 눌렀을 때 확인버튼 생성 -> 코드 일치 여부 확인 api 보내기
  인증 완료되면 인증코드 인풋 없어지면서 이메일 인풋은 disabled 상태로 변경
  */

  // email 중복 확인 함수
  const checkUsedEmail = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      axios
        .post('/user/canuse', {
          email: email,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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

  const submitHandler = (e) => {
    e.preventDefault();
  };

  // 비밀번호 일치여부 확인

  const [isMatchPassword, setIsMatchPassword] = useState(false);

  useEffect(() => {
    if (password === passwordTest) {
      setIsMatchPassword(true);
    } else {
      setIsMatchPassword(false);
    }
  }, [passwordTest, password]);

  // 전공 선택 (=> 나중에 DB 에서 받아와야 함)
  const options = [
    { value: '컴퓨터공학', label: '컴퓨터공학' },
    { value: '경제학', label: '경제학' },
    { value: '경영학', label: '경영학' },
    { value: '국어국문학', label: '국어국문학' },
    { value: '수학', label: '수학' },
  ];
  return (
    <JoinFormContainer onSubmit={submitHandler}>
      <FormGroup>
        <Div>
          <label htmlFor="name">이름</label>
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
          options={options}
          isSearchable
          isClearable
          isMulti
          placeholder="전공검색"
          onChange={onChangeMajor}
        ></Select>
      </FormGroup>
      <FormGroup>
        <Div>
          <label htmlFor="email">이메일</label>
          {email ? (
            isValidEmail ? (
              <EmailCheckBtn onClick={checkUsedEmail}>중복확인</EmailCheckBtn>
            ) : (
              <span style={{ color: '#d63031' }}>
                이메일 형식이 올바르지 않습니다.
              </span>
            )
          ) : null}
        </Div>

        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={onChangeEmail}
        />
      </FormGroup>

      <FormGroup>
        <Div>
          <label htmlFor="verifyCode">인증코드</label>
        </Div>
        <input
          required
          type="text"
          name="verifyCode"
          value={verifyCode}
          onChange={onChangeEmail}
        />
      </FormGroup>
      <FormGroup>
        <Div>
          <label htmlFor="password">비밀번호</label>
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
          <label htmlFor="passwordTest">비밀번호 확인</label>
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
        <label for="allow" style={{ fontSize: '10px' }}>
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
  );
};

export default JoinForm;
