import React from 'react';

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
