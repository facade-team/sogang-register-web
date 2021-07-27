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
  active,
}) => {
  return (
    <GradationBtnComp
      onClick={(e) => {
        if (signBtnType) {
          onClick(signBtnType);
        } else {
          onClick(e);
        }
      }}
      widthPx={width}
      top={top}
      borderRadius={borderRadius}
      active={active}
    >
      {children || (signBtnType === 'login' ? '로그인' : '회원가입')}
    </GradationBtnComp>
  );
};

export default GradationBtn;
