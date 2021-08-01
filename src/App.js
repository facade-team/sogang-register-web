import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { AuthProvider } from './contexts/AuthContext';

// GlobalStyle
import GlobalStyle from './styles/GlobalStyle';

//Components
import MainContainer from './components/MainContainer/MainContainer';
import Sidebar from './components/Sidebar/Sidebar';
import ToggleBtn from './components/ToggleBtn/ToggleBtn';
import Modal from './components/Modal/Modal';

const openedSidebarWidth = 250;
const closedSidebarWidth = 90;

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
  const [height, setHeight] = useState(document.documentElement.scrollHeight);

  useEffect(() => {
    let limit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    setHeight(limit);
    window.addEventListener('resize', () => {
      limit = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      setHeight(limit);
    });
  }, []);

  const toggleSidebarFunc = (e) => {
    setToggleSidebar(!toggleSidebar);
    width !== -closedSidebarWidth
      ? setWidth(-closedSidebarWidth)
      : setWidth(-openedSidebarWidth);
  };

  const openModal = (signBtnType) => {
    setShowModal((prev) => !prev);
    setModalType(signBtnType);
  };

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle></GlobalStyle>
          <Container>
            <MainContainer
              width={toggleSidebar ? openedSidebarWidth : closedSidebarWidth}
              height={height}
              toggleOpen={toggleSidebar}
              openModal={openModal}
            ></MainContainer>
            <ToggleBtn
              width={toggleSidebar ? openedSidebarWidth : closedSidebarWidth}
              toggleOpen={toggleSidebar}
              onClick={toggleSidebarFunc}
            ></ToggleBtn>
            <Sidebar
              width={width}
              height={height}
              toggleOpen={toggleSidebar}
              openSidebar={toggleSidebarFunc}
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
      </AuthProvider>
    </>
  );
};

export default App;
