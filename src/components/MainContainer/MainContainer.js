import React from 'react';
import { Route, Switch } from 'react-router-dom';

//Pages
import Home from '../../pages/Home';
import Feedback from '../../pages/Feedback';
import MyPage from '../../pages/MyPage';
import Join from '../../pages/Join';
import Info from '../../pages/Info/Info';
import MypageProfile from '../../pages/ChangeProfile/ChangeProfile';
import MypageSubjectList from '../../pages/SubjectList/SubjectList';
import MyPagePassword from '../../pages/ChangePassword/ChangePassword';
import MyPageAuthCode from '../../pages/AuthCode/AuthCode';
import MyPageQuitService from '../../pages/QuitService/QuitService';

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
        <Route path="/info" exact>
          <Info openModal={openModal} />
        </Route>
        <Route path="/join" exact>
          <Join openModal={openModal} />
        </Route>

        <Route path={`/mypage/changeprofile`} exact>
          <MypageProfile openModal={openModal} />
        </Route>

        <Route path="/mypage/changepassword" exact>
          <MyPagePassword openModal={openModal} />
        </Route>
        <Route path="/mypage/favoritelist" exact>
          <MypageSubjectList openModal={openModal} />
        </Route>
        <Route path="/mypage/authemail" exact>
          <MyPageAuthCode openModal={openModal}></MyPageAuthCode>
        </Route>
        <Route path="/mypage/quit" exact>
          <MyPageQuitService openModal={openModal}></MyPageQuitService>
        </Route>
      </Switch>
    </Container>
  );
};

export default MainContainer;
