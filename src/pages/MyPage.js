import React, { useState, useEffect } from 'react';
import { useMenuContext } from '../contexts/MenuContext';
import { useAuthContext } from '../contexts/AuthContext';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

//components
import Title from '../components/Title/Title';
import SubjectList from '../components/SubjectList/SubjectList';
import Profile from '../components/ProfileMyPage/ProfileMyPage';

// styled
import {
  Container,
  HomeContainer as MyPageContainer,
} from '../styles/HomeContainer';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const MyPage = ({ openModal }) => {
  // 네비게이션 바에 현재 페이지 표시를 위한 상태
  const { setMenu } = useMenuContext();

  useEffect(() => {
    setMenu('mypage');
  }, [setMenu]);

  const { isAuth } = useAuthContext();

  // 배포 시 주석해제
  // useEffect(() => {
  //   if (!isAuth) openModal();
  // }, [isAuth]);

  // snackbar

  const [state, setState] = useState({
    open: true,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Container>
      {isAuth ? (
        <MyPageContainer navigation="Mypage">
          <Title title="마이페이지" openModal={openModal}></Title>
          <Profile></Profile>
          <SubjectList></SubjectList>
        </MyPageContainer>
      ) : (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="I love snacks"
          key={vertical + horizontal}
          autoHideDuration={2000}
        >
          <Alert onClose={handleClose} severity="error">
            로그인이 필요합니다
          </Alert>
        </Snackbar>
      )}
      {/* <MyPageContainer navigation="Mypage">
        <Title title="마이페이지" openModal={openModal}></Title>
        <Profile></Profile>
        <SubjectList></SubjectList>
      </MyPageContainer> */}
    </Container>
  );
};

export default MyPage;
