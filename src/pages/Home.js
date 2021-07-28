import React, { useState, useEffect } from 'react';

import { data } from '../pages/DummyData';

//components
import Title from '../components/Title/Title';
import SearchOption from '../components/SearchOption/SearchOption';
import DetailOption from '../components/DetailOption/DetailOption';
import SelectSubject from '../components/SelectSubject/SelectSubject';
import DetailBar from '../components/DetailBar/DetailBar';

//styled
import { Container, HomeContainer } from '../styles/HomeContainer';

const Home = ({ openModal }) => {
  const [detailbarWidth, setDetailbarWidth] = useState(0);
  const [cardKey, setCardKey] = useState('');
  const [detailSubject, setDetailSubject] = useState({});
  const [latestSubject, setLatestSubject] = useState({});

  const clickCard = (key) => {
    if (detailbarWidth === 0) {
      setDetailbarWidth(350);
    }

    const detailData = data.find((d) => d.subject_id === key);
    if (key === cardKey) return;

    setCardKey(key);
    setDetailSubject(detailData);
  };

  useEffect(() => {
    return () => {
      setLatestSubject(detailSubject);
    };
  }, [cardKey]);

  return (
    <Container>
      <HomeContainer widthPx={detailbarWidth}>
        <Title title="개설교과목 검색"></Title>
        <SearchOption number="01" subtitle="검색옵션"></SearchOption>
        <DetailOption number="02" subtitle="세부옵션"></DetailOption>
        <SelectSubject
          number="03"
          subtitle="과목선택"
          data={data}
          onClickCard={clickCard}
        ></SelectSubject>
      </HomeContainer>
      {/* 오른쪽 사이드바 */}
      <DetailBar
        width={detailbarWidth}
        signBtnType="login"
        openModal={openModal}
        subject={detailSubject}
        latestSubject={latestSubject}
        clickCard={clickCard}
      ></DetailBar>
    </Container>
  );
};

export default Home;
