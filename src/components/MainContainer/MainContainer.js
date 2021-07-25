import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components

import Feedback from '../../pages/Feedback';
import MyPage from '../../pages/MyPage';
import TopBar from '../TopBar/TopBar';
import Modal from '../Modal/Modal';

//styled
import { Container, Content } from './MainContainer.element';

const MainContainer = ({ widthVW, toggleOpen, onClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (signBtnType) => {
    setShowModal((prev) => !prev);
    setModalType(signBtnType);
  };
  return (
    <Container widthVW={widthVW} toggleOpen={toggleOpen} onClick={onClick}>
      {/* 위부분 바 */}
      <TopBar name="pagename" openModal={openModal} />

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
        setModalType={setModalType}
      ></Modal>

      {/* 메인 렌더링 페이지 */}

      <Content>
        <Switch>
          <Route path="/feedback" exact component={Feedback}></Route>
          <Route path="/mypage" exact component={MyPage} />
        </Switch>
      </Content>
    </Container>
  );
};

export default MainContainer;
