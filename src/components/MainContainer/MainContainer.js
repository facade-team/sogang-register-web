import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Pages
import Home from '../../pages/Home';
import Feedback from '../../pages/Feedback';
import MyPage from '../../pages/MyPage';
import Join from '../../pages/Join';

//styled
import { Container } from './MainContainer.element';

// auth context
import { useAuthContext } from '../../contexts/AuthContext';

const MainContainer = ({ width, toggleOpen, onClick, openModal }) => {
  const { isAuth } = useAuthContext();
  // Todo : Protected Routing
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
          <Home openModal={openModal} />
        </Route>
        <Route path="/feedback" exact>
          <Feedback openModal={openModal} />
        </Route>
        <Route path="/mypage" exact>
          <MyPage openModal={openModal} />
        </Route>
        <Route path="/join" exact>
          <Join openModal={openModal} />
        </Route>
      </Switch>
    </Container>
  );
};

export default MainContainer;
