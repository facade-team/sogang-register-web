import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// GlobalStyle
import GlobalStyle from './styles/GlobalStyle';

//Components
import MainContainer from './components/MainContainer/MainContainer';
import Sidebar from './components/Sidebar/Sidebar';
import ToggleBtn from './components/ToggleBtn/ToggleBtn';

const SidebarWidth = 15;

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [width, setWidth] = useState(-SidebarWidth);

  const toggleSidebarFunc = (e) => {
    setToggleSidebar(!toggleSidebar);
    width !== 0 ? setWidth(0) : setWidth(-SidebarWidth);
  };

  const closeSidebar = (e) => {
    if (!toggleSidebar) {
      return;
    }

    const { innerWidth } = window;
    const sidebarX = (innerWidth * SidebarWidth) / 100;
    if (e.clientX > sidebarX) {
      toggleSidebarFunc();
    }
  };

  return (
    <>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Container>
          <MainContainer
            widthVW={width + SidebarWidth}
            toggleOpen={toggleSidebar}
            onClick={closeSidebar}
          ></MainContainer>
          <ToggleBtn
            widthVW={width + SidebarWidth}
            toggleOpen={toggleSidebar}
            onClick={toggleSidebarFunc}
          ></ToggleBtn>
          <Sidebar widthVW={width} toggleOpen={toggleSidebar}></Sidebar>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
