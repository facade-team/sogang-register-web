import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

//Pages
import Home from '../../pages/Home';
import Feedback from '../../pages/Feedback';
import MyPage from '../../pages/MyPage';

//styled
import { Container } from './MainContainer.element';

const MainContainer = ({ width, toggleOpen, onClick, openModal }) => {
  const [detailbarWidth, setDetailbarWidth] = useState(350);

  return (
    <Container widthPx={width} toggleOpen={toggleOpen} onClick={onClick}>
      {/* 메인 렌더링 페이지 */}
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/feedback" exact component={Feedback}></Route>
        <Route path="/mypage" exact component={MyPage} />
      </Switch>
    </Container>
  );
};

export default MainContainer;
