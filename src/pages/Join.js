import React from 'react';

// components
import Title from '../components/Title/Title';
import JoinForm from '../components/JoinForm/JoinForm';

// styled
import {
  Container,
  HomeContainer as JoinContainer,
} from '../styles/HomeContainer';

const Join = ({ openModal }) => {
  return (
    <Container>
      <JoinContainer navigation="Join">
        <Title title="회원가입" openModal={openModal} widthPx></Title>
        <JoinForm></JoinForm>
      </JoinContainer>
    </Container>
  );
};

export default Join;
