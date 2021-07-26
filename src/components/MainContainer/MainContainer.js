import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Feedback from '../../pages/Feedback';
import MyPage from '../../pages/MyPage';
import TopBar from '../TopBar/TopBar';
import Detailbar from '../DetailBar/DetailBar';

//styled
import {
  Container,
  MainContainerComp,
  MainContent,
} from './MainContainer.element';

const MainContainer = ({ width, toggleOpen, onClick, openModal }) => {
  const [detailbarWidth, setDetailbarWidth] = useState(350);

  return (
    <Container>
      <MainContainerComp
        widthPx={width}
        toggleOpen={toggleOpen}
        onClick={onClick}
      >
        {/* 위부분 바 */}
        <TopBar name="pagename" openModal={openModal} />

        {/* 메인 렌더링 페이지 */}
        <MainContent>
          <Switch>
            <Route path="/feedback" exact component={Feedback}></Route>
            <Route path="/mypage" exact component={MyPage} />
          </Switch>
        </MainContent>
      </MainContainerComp>

      {/* 오른쪽 사이드바 */}
      <Detailbar
        width={detailbarWidth}
        signBtnType="login"
        openModal={openModal}
      ></Detailbar>
    </Container>
  );
};

export default MainContainer;
