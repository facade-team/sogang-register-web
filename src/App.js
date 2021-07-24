import React, { useState, useRef } from 'react';
import { DefaultContext } from 'react-icons/lib';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import ToggleBtn from './components/ToggleBtn/ToggleBtn';
import Profile from './components/Profile/Profile';

const NavbarWidth = 15;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [width, setWidth] = useState(-NavbarWidth);

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

  return (
    <Container ref={containerRef} onClick={closeSidebar}>
      <Profile userName="최현수" userMajor="컴퓨터공학과"></Profile>
      <ToggleBtn
        widthVW={width + NavbarWidth}
        toggleOpen={toggleSidebar}
        onClick={openSidebar}
      ></ToggleBtn>
      <Navbar widthVW={width} toggleOpen={toggleSidebar}></Navbar>
    </Container>
  );
};

export default App;
