import React from 'react';
import useInput from '../../hooks/useInput';

import {
  FormContainer,
  FormGroup,
  CustomGradationBtnComp,
} from './Feedback.element';

const FeedbackForm = () => {
  const [form, onChangeForm] = useInput({
    email: '',
    title: '',
    content: '',
  });
  const { email, title, content } = form;
  return (
    <FormContainer>
      <FormGroup>
        <label htmlFor="email">이메일</label>
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
        widthPx={750}
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
