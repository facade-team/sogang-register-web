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
  position,
  marginRight,
  mouseover,
}) => {
  const { isAuth, logout } = useAuthContext();

  return (
    <GradationBtnComp
      onClick={(e) => {
        if (mouseover === false) {
          return;
        }

        if (signBtnType && !isAuth) {
          onClick(signBtnType);
        } else if (signBtnType && isAuth) {
          logout();
        } else {
          onClick(e);
        }
      }}
      widthPx={width}
      top={top}
      borderRadius={borderRadius}
      active={active}
      position={position}
      marginRight={marginRight}
      mouseover={mouseover}
    >
      {/* {children || (signBtnType === 'login' ? '로그인' : '회원가입')} */}
      {children || (isAuth ? '로그아웃' : '로그인')}
    </GradationBtnComp>
  );
};

export default GradationBtn;
