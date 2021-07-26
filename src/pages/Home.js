import React, { useState } from 'react';

import { data } from './DummyData';

//components
import Title from '../components/Title/Title';
import SelectSubject from '../components/SelectSubject/SelectSubject';
import DetailBar from '../components/DetailBar/DetailBar';

//styled
import { Container, HomeContainer } from '../styles/HomeContainer';

const Home = ({ openModal }) => {
  const [detailbarWidth, setDetailbarWidth] = useState(350);
  return (
    <Container>
      <HomeContainer>
        <Title title="개설교과목 검색"></Title>
        {/* <SearchOption number="01" subtitle="검색옵션"></SearchOption>
      <DetailOption number="02" subtitle="세부옵션"></DetailOption> */}
        <SelectSubject number="03" subtitle="과목선택"></SelectSubject>
      </HomeContainer>
      {/* 오른쪽 사이드바 */}
      <DetailBar
        width={detailbarWidth}
        signBtnType="login"
        openModal={openModal}
        subject={data[0]}
      ></DetailBar>
    </Container>
  );
};

export default Home;
