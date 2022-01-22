import React from 'react';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import styled from 'styled-components';
import notionLogo from '../../assets/img/notion.png';
import instaLogo from '../../assets/img/insta.jpeg';

// auth context
import { useAuthContext } from '../../contexts/AuthContext';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';

import {
  FormContainer,
  FormGroup,
  CustomGradationBtnComp,
} from './Feedback.element';
import { useState } from 'react';

const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  margin-bottom: 20px;
  width: 80%;
  border-radius: 10px;

  /* background-color: #f1f0f0; */

  a {
    margin-right: 15px;
    margin-left: 5px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 10px 20px;
    flex-direction: column;
    a {
      margin-bottom: 5px;
      align-items: center;
    }
  }
`;

const A = styled.a`
  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: all 0.3s ease;
  }
`;

const FeedbackForm = () => {
  const { userData } = useAuthContext();
  const [form, onChangeForm, setForm] = useInput({
    email: userData.email,
    title: '',
    script: '',
  });
  const { email, title, script } = form;

  const { setLoading } = useLoadingContext();
  const { setSnackBar } = useSnackBarContext();

  const [bytes, setBytes] = useState(0);

  //textarea 바이트 수 체크하는 함수
  const fn_checkByte = (obj) => {
    const maxByte = 500; //최대 100바이트
    //const text_val = obj.value; //입력한 문자
    const text_val = obj; //입력한 문자
    const text_len = text_val.length; //입력한 문자수

    let totalByte = 0;
    for (let i = 0; i < text_len; i++) {
      const each_char = text_val.charAt(i);
      const uni_char = escape(each_char); //유니코드 형식으로 변환
      if (uni_char.length > 4) {
        // 한글 : 2Byte
        totalByte += 2;
      } else {
        // 영문,숫자,특수문자 : 1Byte
        totalByte += 1;
      }
    }

    setBytes(totalByte);
  };

  const handleSubmit = () => {
    if (email === '' || title === '' || script === '') {
      // snackbar 에러 문구
      return 'o';
    } else {
      setLoading(true);
      axios
        .post('/user/reportemail', form)
        .then((res) => {
          setSnackBar({
            msg: '소중한 피드백 감사합니다!',
            type: 'success',
          });
          setLoading(false);
          setForm({
            email: '',
            title: '',
            script: '',
          });
        })
        .catch((err) => {
          setLoading(false);
          setSnackBar({
            msg: '다시 시도해주십시오',
            type: 'error',
          });
        });
    }
  };

  return (
    <FormContainer>
      <LinkContainer>
        <A
          href="https://calmdown.notion.site/33a4fff98f414bbca2493ae77a962e6b"
          target="_blank"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img src={notionLogo} width="28px"></img>
          <span>서강신청 블로그</span>
        </A>

        <A
          href="https://www.instagram.com/sogang_sincheong/"
          target="_blank"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src={instaLogo}
            width="22px"
            style={{ marginRight: '5px' }}
          ></img>
          <span>Instagram</span>
        </A>
      </LinkContainer>
      <FormGroup>
        <label htmlFor="email">회신받을 이메일</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeForm}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="title">제목</label>
        <input type="text" name="title" value={title} onChange={onChangeForm} />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">내용</label>
        <textarea
          name="script"
          value={script}
          onChange={onChangeForm}
          style={{ height: '200px' }}
          onKeyUp={(x) => fn_checkByte(script)}
        />
        <span style={{ fontSize: '8px', color: '#727272' }}>
          {bytes}/500bytes
        </span>
      </FormGroup>
      <CustomGradationBtnComp
        onClick={handleSubmit}
        top={null}
        borderRadius={12}
        active
      >
        제출
      </CustomGradationBtnComp>
    </FormContainer>
  );
};

export default FeedbackForm;
