import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

// GlobalStyle
import GlobalStyle from './styles/GlobalStyle';

//Components
import MainContainer from './components/MainContainer/MainContainer';
import Sidebar from './components/Sidebar/Sidebar';
import ToggleBtn from './components/ToggleBtn/ToggleBtn';
import Modal from './components/Modal/Modal';

const openedSidebarWidth = 250;
const closedSidebarWidth = 70;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  //모달
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  //사이드바
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [width, setWidth] = useState(
    toggleSidebar ? -openedSidebarWidth : -closedSidebarWidth
  );

  const toggleSidebarFunc = (e) => {
    setToggleSidebar(!toggleSidebar);
    width !== -closedSidebarWidth
      ? setWidth(-closedSidebarWidth)
      : setWidth(-openedSidebarWidth);
  };

  const closeSidebar = (e) => {
    if (!toggleSidebar) {
      return;
    }

    if (e.clientX > openedSidebarWidth) {
      toggleSidebarFunc();
    }
  };

  const openModal = (signBtnType) => {
    setShowModal((prev) => !prev);
    setModalType(signBtnType);
  };

  return (
    <>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Container>
          <MainContainer
            width={toggleSidebar ? openedSidebarWidth : closedSidebarWidth}
            toggleOpen={toggleSidebar}
            onClick={closeSidebar}
            openModal={openModal}
          ></MainContainer>
          <ToggleBtn
            width={toggleSidebar ? openedSidebarWidth : closedSidebarWidth}
            toggleOpen={toggleSidebar}
            onClick={toggleSidebarFunc}
          ></ToggleBtn>
          <Sidebar
            width={width}
            toggleOpen={toggleSidebar}
            openModal={openModal}
          ></Sidebar>

          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            modalType={modalType}
            setModalType={setModalType}
          ></Modal>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
