import React from 'react';

import Title from '../components/Title/Title';

// styled
import {
  Container,
  HomeContainer as MyPageContainer,
} from '../styles/HomeContainer';

const MyPage = () => {
  return (
    <Container>
      <MyPageContainer>
        <Title title="마이페이지"></Title>
      </MyPageContainer>
    </Container>
  );
};

export default MyPage;
