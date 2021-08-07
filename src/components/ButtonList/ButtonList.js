import React from 'react';
import { Link } from 'react-router-dom';

//components
import GradationBtn from '../GradationBtn/GradationBtn';

//styled
import { Container } from './ButtonList.element';

const ButtonList = () => {
  return (
    <Container>
      <Link to="/mypage/changeprofile">
        <GradationBtn
          width={200}
          borderRadius={20}
          active={true}
          mouseover={false}
        >
          회원정보 수정
        </GradationBtn>
      </Link>
      <br />
      <Link to="/mypage/changepassword">
        <GradationBtn
          width={200}
          borderRadius={20}
          active={true}
          mouseover={false}
        >
          비밀번호 변경
        </GradationBtn>
      </Link>
      <br />
      <Link to="/mypage/favoritelist">
        <GradationBtn
          width={200}
          borderRadius={20}
          active={true}
          mouseover={false}
        >
          즐겨찾기
        </GradationBtn>
      </Link>
      <br />
      <Link to="/mypage/authemail">
        <GradationBtn
          width={200}
          borderRadius={20}
          active={true}
          mouseover={false}
        >
          이메일 인증
        </GradationBtn>
      </Link>
      <br />
      <Link to="/mypage/quit">
        <GradationBtn
          width={200}
          borderRadius={20}
          active={true}
          mouseover={false}
        >
          회원 탈퇴
        </GradationBtn>
      </Link>
    </Container>
  );
};

export default ButtonList;
