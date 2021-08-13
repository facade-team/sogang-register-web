import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { BsArrowUp } from 'react-icons/bs';

import { useMenuContext } from '../contexts/MenuContext';
import { useSubjectContext } from '../contexts/SubjectContext';

import Fab from '@material-ui/core/Fab';

//components
import Title from '../components/Title/Title';
import SearchOption from '../components/SearchOption/SearchOption';
import SortOption from '../components/SortOption/SortOption';
import SelectSubject from '../components/SelectSubject/SelectSubject';
import DetailBar from '../components/DetailBar/DetailBar';
import MobileDetailBar from '../components/DetailBarMobile/MobileDetailBar';
import MobileModal from '../components/DetailBarMobile/MobileModal';
//styled
import { Container, HomeContainer } from '../styles/HomeContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '25px',
    right: '25px',
    zIndex: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FabContainer = styled.div`
  display: block;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

const Home = ({ openModal, height }) => {
  const [detailbarWidth, setDetailbarWidth] = useState(0);
  const [detailbarHeight, setDetailbarHeight] = useState(0);
  const [cardKey, setCardKey] = useState('');
  const [detailSubject, setDetailSubject] = useState({});
  const [mobileDetailSubject, setMobileDetailSubject] = useState({});
  const { subjects } = useSubjectContext();
  const [modalVisible, setModalVisible] = useState(false);

  const [notMobile, setNotMobile] = useState(
    window.matchMedia('(min-width: 600px)').matches
  ); // true : pc, false : mobile

  const closeModal = () => {
    setModalVisible(false);
  };

  const clickCard = (key) => {
    if (detailbarWidth === 0) {
      setDetailbarWidth(350);
    }

    const detailData = subjects.find((d) => d.subject_id === key);
    if (key === cardKey) return;
    setCardKey(key);

    setDetailSubject(detailData);
  };
  const mobileClickCard = (key) => {
    if (detailbarHeight === 0) {
      setDetailbarHeight(400);
    }
    const mobileDetailData = subjects.find((data) => data.subject_id === key);
    if (key === cardKey) {
      setModalVisible(true);
      return;
    } else {
      setCardKey(key);
      setMobileDetailSubject(mobileDetailData);
      setModalVisible(true);
    }
  };

  // 네비게이션 바에 현재 페이지 표시를 위한 상태
  const { setMenu } = useMenuContext();

  useEffect(() => {
    setMenu('search');
  }, [setMenu]);

  useEffect(() => {
    var notWidth = window.matchMedia('(min-width: 600px)').matches;
    setNotMobile(notWidth);
  }, []);

  const classes = useStyles();

  const goToTop = (e) => {
    document.querySelector('#home').scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <HomeContainer widthPx={detailbarWidth} navigation="Home">
        <Title
          title="개설교과목 검색"
          openModal={openModal}
          widthPx={detailbarWidth}
        ></Title>
        <SearchOption number="01" subtitle="검색옵션"></SearchOption>
        <SortOption number="02" subtitle="필터옵션"></SortOption>
        <SelectSubject
          number="03"
          subtitle="과목조회"
          data={subjects}
          onClickCard={notMobile ? clickCard : mobileClickCard}
        ></SelectSubject>
        <FabContainer className={classes.root}>
          <Fab color="primary" aria-label="add" onClick={goToTop}>
            <BsArrowUp size="30" />
          </Fab>
        </FabContainer>
      </HomeContainer>
      {/* 오른쪽 사이드바 */}
      {notMobile === true ? ( // pc
        detailbarWidth === 0 ? null : (
          <DetailBar
            width={detailbarWidth}
            height={height}
            signBtnType="login"
            openModal={openModal}
            subject={detailSubject}
            clickCard={clickCard}
            // latestSubject={latestSubject}
          ></DetailBar>
        )
      ) : (
        // mobile
        modalVisible && (
          <MobileModal
            visible={modalVisible}
            closable={true}
            maskClosable={true}
            onClose={closeModal}
            height={detailbarHeight}
          >
            <MobileDetailBar
              height={detailbarHeight}
              subject={mobileDetailSubject}
              clickCard={mobileClickCard}
              visible={modalVisible}
              onClose={closeModal}
            ></MobileDetailBar>
          </MobileModal>
        )
      )}
    </Container>
  );
};

export default Home;
