import React from 'react';

//styled
import { GradationBtnComp } from './GradationBtn.element';

// Auth Context API
import { useAuthContext } from '../../contexts/AuthContext';

const GradationBtn = ({
  onClick,
  signBtnType,
  children,
  width,
  top,
  borderRadius,
  active,
}) => {
  const { isLoggedIn, logout } = useAuthContext();

  return (
    <GradationBtnComp
      onClick={(e) => {
        if (signBtnType && !isLoggedIn) {
          onClick(signBtnType);
        } else if (signBtnType && isLoggedIn) {
          logout();
        } else {
          onClick(e);
        }
      }}
      widthPx={width}
      top={top}
      borderRadius={borderRadius}
      active={active}
    >
      {/* {children || (signBtnType === 'login' ? '로그인' : '회원가입')} */}
      {children || (isLoggedIn ? '로그아웃' : '로그인')}
    </GradationBtnComp>
  );
};

export default GradationBtn;
