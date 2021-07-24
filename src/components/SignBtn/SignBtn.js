import React from 'react';
import { OpenModalBtn } from './SignBtn.element';

const SignBtn = ({ onClick, signBtnType }) => {
  return (
    <OpenModalBtn
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(signBtnType)}
    >
      {signBtnType === 'login' ? '로그인' : '회원가입'}
    </OpenModalBtn>
  );
};

export default SignBtn;
