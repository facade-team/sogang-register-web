import React from 'react';

//styled
import { GradationBtnComp } from './GradationBtn.element';

const GradationBtn = ({ onClick, signBtnType, text = undefined }) => {
  return (
    <GradationBtnComp
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(signBtnType)}
    >
      {text || (signBtnType === 'login' ? '로그인' : '회원가입')}
    </GradationBtnComp>
  );
};

export default GradationBtn;
