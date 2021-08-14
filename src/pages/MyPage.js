import React, { useEffect } from 'react';
import { useMenuContext } from '../contexts/MenuContext';
import { useAuthContext } from '../contexts/AuthContext';
import { useSnackBarContext } from '../contexts/SnackBarContext';

//components
import Title from '../components/Title/Title';
import ButtonList from '../components/ButtonList/ButtonList';
import MypageSubjectList from './SubjectList/SubjectList';

// styled
import { HomeContainer as MyPageContainer } from '../styles/HomeContainer';
import { Container, Box } from '../styles/MyPageContainer';

const MyPage = (props) => {
  // 네비게이션 바에 현재 페이지 표시를 위한 상태
  const { setMenu } = useMenuContext();
  const { setSnackBar } = useSnackBarContext();

  useEffect(() => {
    setMenu('mypage');
  }, [setMenu]);

  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      setSnackBar({ type: 'error', msg: '로그인이 필요합니다.' });
    }
  }, [isAuth]);

  return (
    <Container>
      <MyPageContainer navigation="Mypage">
        <Title title="마이페이지" openModal={props.openModal}></Title>
        {isAuth && (
          <>
            <Box>
              <ButtonList></ButtonList>
              <MypageSubjectList></MypageSubjectList>
            </Box>
          </>
        )}
      </MyPageContainer>
    </Container>
  );
};

export default MyPage;
