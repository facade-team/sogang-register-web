import React from 'react';
import { Link } from 'react-router-dom';

//components
import GradationBtn from '../GradationBtn/GradationBtn';

//context
import { useAuthContext } from '../../contexts/AuthContext';

//styled
import { Container, Buttons } from './ButtonList.element';

const ButtonList = () => {
  const { isAuth, userData } = useAuthContext();
  return (
    <Container>
      <Buttons>
        <Link to="/mypage/changeprofile">
          <GradationBtn
            width={200}
            borderRadius={20}
            active={true}
            mouseover={false}
            height="40"
          >
            회원정보 수정
          </GradationBtn>
        </Link>
        <Link to="/mypage/changepassword">
          <GradationBtn
            width={200}
            borderRadius={20}
            active={true}
            mouseover={false}
            height="40"
          >
            비밀번호 변경
          </GradationBtn>
        </Link>
        {isAuth && !userData.isVerified ? (
          <Link to="/mypage/authemail">
            <GradationBtn
              width={200}
              borderRadius={20}
              active={true}
              mouseover={false}
              height="40"
            >
              이메일 인증
            </GradationBtn>
          </Link>
        ) : null}

        <Link to="/mypage/quit">
          <GradationBtn
            width={200}
            borderRadius={20}
            active={true}
            mouseover={false}
            height="40"
          >
            회원 탈퇴
          </GradationBtn>
        </Link>
      </Buttons>
    </Container>
  );
};

export default ButtonList;
