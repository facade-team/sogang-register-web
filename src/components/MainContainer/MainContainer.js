import React, { useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Modal from '../Modal/Modal';
import Profile from '../Profile/Profile';
import Feedback from '../../pages/Feedback';
import MyPage from '../../pages/MyPage';

//styled
import { Container, Content } from './MainContainer.element';

const MainContainer = ({ widthVW, toggleOpen, onClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // const openModal = (signBtnType) => {
  //   setShowModal((prev) => !prev);
  //   setModalType(signBtnType);
  // };

  return (
    <Container widthVW={widthVW} toggleOpen={toggleOpen} onClick={onClick}>
      <Profile userName="최현수" userMajor="컴퓨터공학과"></Profile>

      {/* 로그인 버튼 */}
      {/* <SignBtn onClick={openModal} signBtnType={'login'}></SignBtn>
      <SignBtn onClick={openModal} signBtnType={'signup'}></SignBtn> */}

      {/* 로그인 모달 */}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
        setModalType={setModalType}
      ></Modal>

      <Switch>
        <Route path="/feedback" exact component={Feedback}></Route>
        <Route path="/mypage" exact component={MyPage} />
      </Switch>
    </Container>
  );
};

export default MainContainer;
