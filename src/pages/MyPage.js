import React from 'react';

import Title from '../components/Title/Title';

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
      </MyPageContainer>
    </Container>
  );
};

export default MyPage;
