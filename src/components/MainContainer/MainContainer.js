import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Pages
import Home from '../../pages/Home';
import Feedback from '../../pages/Feedback';
import MyPage from '../../pages/MyPage';

//styled
import { Container } from './MainContainer.element';

const MainContainer = ({ width, height, toggleOpen, onClick, openModal }) => {
  return (
    <Container
      widthPx={width}
      toggleOpen={toggleOpen}
      onClick={onClick}
      openModal={openModal}
    >
      {/* 메인 렌더링 페이지 */}
      <Switch>
        <Route path="/" exact>
          <Home openModal={openModal} height={height} />
        </Route>
        <Route path="/feedback" exact>
          <Feedback openModal={openModal} />
        </Route>
        <Route path="/mypage" exact>
          <MyPage openModal={openModal} />
        </Route>
      </Switch>
    </Container>
  );
};

export default MainContainer;
