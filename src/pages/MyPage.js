import React, { useEffect } from 'react';
import { useMenuContext } from '../contexts/MenuContext';

//components
import Title from '../components/Title/Title';
import SubjectList from '../components/SubjectList/SubjectList';
import Profile from '../components/ProfileMyPage/ProfileMyPage';

// styled
import {
  Container,
  HomeContainer as MyPageContainer,
} from '../styles/HomeContainer';

const MyPage = ({ openModal }) => {
  // 네비게이션 바에 현재 페이지 표시를 위한 상태
  const { setMenu } = useMenuContext();

  useEffect(() => {
    setMenu('mypage');
  }, [setMenu]);

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지" openModal={openModal}></Title>
        <Profile></Profile>
        <SubjectList></SubjectList>
      </MyPageContainer>
    </Container>
  );
};

export default MyPage;
