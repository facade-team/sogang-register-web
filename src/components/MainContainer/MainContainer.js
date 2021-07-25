import React, { useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Modal from '../Modal/Modal';
import SignBtn from '../SignBtn/SignBtn';
import Profile from '../Profile/Profile';
import Feedback from '../../pages/Feedback';
import MyPage from '../../pages/MyPage';
import TopBar from '../TopBar/TopBar';

//styled
import { Container, BtnContainer } from './MainContainer.element';

const MainContainer = ({ widthVW, toggleOpen, onClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (signBtnType) => {
    setShowModal((prev) => !prev);
    setModalType(signBtnType);
  };

  return (
    <Container widthVW={widthVW} toggleOpen={toggleOpen} onClick={onClick}>
      <TopBar name="pagename" />
      {/* 로그인 버튼 */}
      {/* <BtnContainer>
        <SignBtn onClick={openModal} signBtnType={'login'}></SignBtn>
        <SignBtn onClick={openModal} signBtnType={'signup'}></SignBtn>
        <Profile userName="최현수" userMajor="컴퓨터공학과"></Profile>
      </BtnContainer> */}

      {/* 로그인 모달 */}
      {/* <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
        setModalType={setModalType}
      ></Modal> */}

      {/* 위부분 바 */}

      {/* 메인 렌더링 페이지 */}
      <Switch>
        <Route path="/feedback" exact component={Feedback}></Route>
        <Route path="/mypage" exact component={MyPage} />
      </Switch>
    </Container>
  );
};

export default MainContainer;