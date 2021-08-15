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
        <span
          style={{
            textAlign: 'center',
            fontSize: '10px',
            color: '#626262',
            marginTop: '30px',
          }}
        >
          본 서비스에 사용된 개설교과목 정보의 출처는{' '}
          <a
            target="_blank"
            href="http://sis109.sogang.ac.kr/sap/bc/webdynpro/sap/zcmw9016?sap-language=KO#"
            style={{ color: '#61527F' }}
          >
            서강대학교 개설과목정보
          </a>{' '}
          입니다
        </span>
      </FeedbackContainer>
    </Container>
  );
};

export default Feedback;
