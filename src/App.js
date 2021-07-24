import React, { useState, useRef } from 'react';
import { DefaultContext } from 'react-icons/lib';
import styled from 'styled-components';
import SideBar from './components/Sidebar';
import ToggleBtn from './components/ToggleBtn';

const SidebarWidth = 15;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [width, setWidth] = useState(-SidebarWidth);

  const containerRef = useRef();

  const openSidebar = (e) => {
    setToggleSidebar(true);
    width !== 0 ? setWidth(0) : setWidth(-SidebarWidth);
  };

  const closeSidebar = (e) => {
    // 토글바가 닫혀있으면 종료
    if (toggleSidebar === false) {
      return;
    }
    // console.log(e);

    // if (e.target.className !== 'sidebar') {
    //   setToggleSidebar(!toggleSidebar);
    //   width !== 0 ? setWidth(0) : setWidth(-SidebarWidth);
    // }
  };

  return (
    <Container ref={containerRef} onClick={closeSidebar}>
      <ToggleBtn
        widthVW={width + SidebarWidth}
        toggleOpen={toggleSidebar}
        onClick={openSidebar}
      ></ToggleBtn>
      <SideBar widthVW={width} toggleOpen={toggleSidebar}></SideBar>
    </Container>
  );
};

export default App;
