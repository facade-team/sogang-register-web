import React from 'react';
import { CheckContainer } from './Checkbox.element';

const Checkbox = ({
  subject,
  YearFocused,
  ProfFocused,
  TimeFocused,
  LangFocused,
  ZoomFocused,
}) => {
  return YearFocused === true ? (
    <CheckContainer>
      <input type="checkbox" id="yearcheck" />
      <label for="yearcheck">{subject}</label>
    </CheckContainer>
  ) : ProfFocused === true ? (
    <CheckContainer>
      <input type="checkbox" />
      {subject} 교수
    </CheckContainer>
  ) : TimeFocused === true ? (
    <CheckContainer>
      <input type="checkbox" />
      {subject}
    </CheckContainer>
  ) : LangFocused === true ? (
    <CheckContainer>영어강의</CheckContainer>
  ) : (
    <CheckContainer>비대면여부</CheckContainer>
  );
};

export default Checkbox;
