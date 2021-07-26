import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Components
import Feedback from '../../pages/Feedback';
import MyPage from '../../pages/MyPage';
import TopBar from '../TopBar/TopBar';

//styled
import { Container, Content } from './MainContainer.element';

const MainContainer = ({ width, toggleOpen, onClick, openModal }) => {
  return (
    <Container widthPx={width} toggleOpen={toggleOpen} onClick={onClick}>
      {/* 위부분 바 */}
      <TopBar name="pagename" openModal={openModal} />

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
