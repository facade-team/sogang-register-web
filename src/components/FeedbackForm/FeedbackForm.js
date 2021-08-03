import React, { useEffect } from 'react';
import useInput from '../../hooks/useInput';

// auth context
import { useAuthContext } from '../../contexts/AuthContext';

import {
  FormContainer,
  FormGroup,
  CustomGradationBtnComp,
} from './Feedback.element';

const FeedbackForm = () => {
  const { userData } = useAuthContext();
  const [form, onChangeForm, setForm] = useInput({
    email: '',
    title: '',
    content: '',
  });
  const { email, title, content } = form;

  useEffect(() => {
    setForm({ ...form, email: userData.email });
  }, [userData]);

  return (
    <FormContainer>
      <FormGroup>
        <label htmlFor="email">본인 이메일</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeForm}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="title">제목</label>
        <input
          type="title"
          name="title"
          value={title}
          onChange={onChangeForm}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="email">내용</label>
        <textarea name="content" value={content} onChange={onChangeForm} />
      </FormGroup>
      <CustomGradationBtnComp
        onClick={null}
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
