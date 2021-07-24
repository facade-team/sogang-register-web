import React, { useState, useRef } from 'react';
import { DefaultContext } from 'react-icons/lib';
import GlobalStyle from './styles/GlobalStyle';
import Modal from './components/Modal/Modal';
import SignBtn from './components/SignBtn';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import ToggleBtn from './components/ToggleBtn/ToggleBtn';
import Profile from './components/Profile/Profile';
import Feedback from './pages/Feedback';

const NavbarWidth = 15;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [width, setWidth] = useState(-NavbarWidth);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const containerRef = useRef();

  const openSidebar = (e) => {
    setToggleSidebar(true);
    width !== 0 ? setWidth(0) : setWidth(-NavbarWidth);
  };

  const closeSidebar = (e) => {
    // 토글바가 닫혀있으면 종료
    if (toggleSidebar === false) {
      return;
    }
    console.log(e);

    if (e.target.className !== 'sidebar') {
      setToggleSidebar(!toggleSidebar);
      width !== 0 ? setWidth(0) : setWidth(-NavbarWidth);
    }
  };

  const openModal = (signBtnType) => {
    console.log(signBtnType);
    setShowModal((prev) => !prev);
    setModalType(signBtnType);
  };

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container ref={containerRef} onClick={closeSidebar}>
        <Profile userName="최현수" userMajor="컴퓨터공학과"></Profile>
        <ToggleBtn
          widthVW={width + NavbarWidth}
          toggleOpen={toggleSidebar}
          onClick={openSidebar}
        ></ToggleBtn>
        <Navbar widthVW={width} toggleOpen={toggleSidebar}></Navbar>

        {/* 로그인 버튼 */}
        <SignBtn onClick={openModal} signBtnType={'login'}></SignBtn>
        <SignBtn onClick={openModal} signBtnType={'signup'}></SignBtn>

        {/* 로그인 모달 */}
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalType={modalType}
          setModalType={setModalType}
        ></Modal>
        <Feedback></Feedback>
      </Container>
    </>
  );
};

export default App;
