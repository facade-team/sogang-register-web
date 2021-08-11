import React from 'react';
import useInput from '../../hooks/useInput';
import axios from 'axios';

// auth context
import { useAuthContext } from '../../contexts/AuthContext';
import { useLoadingContext } from '../../contexts/LoadingContext';
import { useSnackBarContext } from '../../contexts/SnackBarContext';

import {
  FormContainer,
  FormGroup,
  CustomGradationBtnComp,
} from './Feedback.element';

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

  const handleSubmit = () => {
    console.log(form);
    setLoading(true);
    axios
      .post('/user/reportemail', form)
      .then((res) => {
        console.log(1, res);
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
        console.log(err);
        setSnackBar({
          msg: '다시 시도해주십시오',
          type: 'error',
        });
      });
  };

  return (
    <FormContainer>
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
        <textarea name="script" value={script} onChange={onChangeForm} />
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
