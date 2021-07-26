import React from 'react';

//styled
import { GradationBtnComp } from './GradationBtn.element';

const GradationBtn = ({
  onClick,
  signBtnType,
  children,
  width,
  top,
  borderRadius,
}) => {
  return (
    <GradationBtnComp
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(signBtnType)}
      widthPx={width}
      top={top}
      borderRadius={borderRadius}
    >
      {children || (signBtnType === 'login' ? '로그인' : '회원가입')}
    </GradationBtnComp>
  );
};

export default GradationBtn;
