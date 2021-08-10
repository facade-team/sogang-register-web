import React, { useState, useEffect } from 'react';

import { useMenuContext } from '../contexts/MenuContext';
import { useSubjectContext } from '../contexts/SubjectContext';

//components
import Title from '../components/Title/Title';
import SearchOption from '../components/SearchOption/SearchOption';
import DetailOption from '../components/DetailOption/DetailOption';
import SelectSubject from '../components/SelectSubject/SelectSubject';
import DetailBar from '../components/DetailBar/DetailBar';

//styled
import { Container, HomeContainer } from '../styles/HomeContainer';

const Home = ({ openModal, height }) => {
  const [detailbarWidth, setDetailbarWidth] = useState(0);
  const [cardKey, setCardKey] = useState('');
  const [detailSubject, setDetailSubject] = useState({});

  const { subjects } = useSubjectContext();

  const clickCard = (key) => {
    if (detailbarWidth === 0) {
      setDetailbarWidth(350);
    }

    const detailData = subjects.find((d) => d.subject_id === key);
    if (key === cardKey) return;
    setCardKey(key);

    setDetailSubject(detailData);
  };

  // 네비게이션 바에 현재 페이지 표시를 위한 상태
  const { setMenu } = useMenuContext();

  useEffect(() => {
    setMenu('search');
  }, [setMenu]);

  return (
    <Container>
      <HomeContainer widthPx={detailbarWidth} navigation="Home">
        <Title
          title="개설교과목 검색"
          openModal={openModal}
          widthPx={detailbarWidth}
        ></Title>
        <SearchOption number="01" subtitle="검색옵션"></SearchOption>
        <DetailOption number="02" subtitle="세부옵션"></DetailOption>
        <SelectSubject
          number="03"
          subtitle="과목조회"
          data={subjects}
          onClickCard={clickCard}
        ></SelectSubject>
      </HomeContainer>
      {/* 오른쪽 사이드바 */}
      {detailbarWidth === 0 ? null : (
        <DetailBar
          width={detailbarWidth}
          height={height}
          signBtnType="login"
          openModal={openModal}
          subject={detailSubject}
          clickCard={clickCard}
        ></DetailBar>
      )}
    </Container>
  );
};

export default Home;
