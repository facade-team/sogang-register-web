import React, { useEffect } from 'react';
import { useMenuContext } from '../contexts/MenuContext';

// components
import Title from '../components/Title/Title';
import FeedbackForm from '../components/FeedbackForm/FeedbackForm';

// styled
import {
  Container,
  HomeContainer as FeedbackContainer,
} from '../styles/HomeContainer';

const Feedback = ({ openModal }) => {
  // 네비게이션 바에 현재 페이지 표시를 위한 상태
  const { setMenu } = useMenuContext();

  useEffect(() => {
    setMenu('feedback');
  }, [setMenu]);
  return (
    <Container>
      <FeedbackContainer navigation="Feedback">
        <Title title="피드백/문의" openModal={openModal}></Title>
        <FeedbackForm></FeedbackForm>
      </FeedbackContainer>
    </Container>
  );
};

export default Feedback;
