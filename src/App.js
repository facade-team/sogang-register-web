import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useAuthContext } from './contexts/AuthContext';
import { useLoadingContext } from './contexts/LoadingContext';
import { useSnackBarContext } from './contexts/SnackBarContext';
import { useSubjectContext } from './contexts/SubjectContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

// GlobalStyle
import GlobalStyle from './styles/GlobalStyle';

//Components
import MainContainer from './components/MainContainer/MainContainer';
import Sidebar from './components/Sidebar/Sidebar';
import MobileSidebar from './components/Sidebar/MobileSidebar';
import ToggleBtn from './components/ToggleBtn/ToggleBtn';
import MobileToggleBtn from './components/ToggleBtn/MobileToggleBtn';
import Modal from './components/Modal/Modal';

// Snackbar
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const openedSidebarWidth = 250;
const closedSidebarWidth = 90;
const closedMobileSidebarHeight = 60;

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const Spinner = styled(CircularProgress)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1000;
  & svg {
    color: #7945e2;
  }
`;

const App = () => {
  //모달
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  //사이드바
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const [mobileToggleSidebar, setMobileToggleSidebar] = useState(false);
  const [width, setWidth] = useState(
    toggleSidebar ? -openedSidebarWidth : -closedSidebarWidth
  );
  const [height, setHeight] = useState(document.documentElement.scrollHeight);
  const [notMobile, setNotMobile] = useState(
    window.matchMedia('(min-width: 600px)').matches
  ); // true : pc, false : mobile
  const { subject } = useSubjectContext();
  const [mobileWidth, setMobileWidth] = useState(
    document.documentElement.scrollWidth
  );

  useEffect(() => {
    let limit = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    setHeight(limit);
    window.addEventListener('resize', () => {
      limit = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      setHeight(limit);

      var notWidth = window.matchMedia('(min-width: 600px)').matches;
      setNotMobile(notWidth);
    });
  });

  const toggleSidebarFunc = (e) => {
    setToggleSidebar(!toggleSidebar);
    width !== -closedSidebarWidth
      ? setWidth(-closedSidebarWidth)
      : setWidth(-openedSidebarWidth);
  };

  const openModal = (signBtnType) => {
    setShowModal((prev) => !prev);
    setModalType(signBtnType);
  };

  const { setUserData, setIsAuth, authLoading, setAuthLoading } =
    useAuthContext();
  const { loading, setLoading } = useLoadingContext();

  const initializeUserInfo = () => {
    const ud = JSON.parse(localStorage.getItem('userData'));
    if (!ud) return;
    setUserData(ud);
    setIsAuth(true);
  };

  useEffect(() => {
    initializeUserInfo();
  }, []);

  // 스낵바
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const { snackBar, setSnackBar } = useSnackBarContext();

  useEffect(() => {
    if (snackBar) {
      setState({ ...state, open: true });
    }
  }, [snackBar]);

  return (
    <>
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Container>
          {loading ? <Spinner /> : null}
          {authLoading ? (
            <Spinner />
          ) : notMobile === true ? (
            //pc
            <>
              <MainContainer
                width={toggleSidebar ? openedSidebarWidth : closedSidebarWidth}
                height={height}
                toggleOpen={toggleSidebar}
                openModal={openModal}
              ></MainContainer>
              <ToggleBtn
                width={toggleSidebar ? openedSidebarWidth : closedSidebarWidth}
                toggleOpen={toggleSidebar}
                onClick={toggleSidebarFunc}
              ></ToggleBtn>
            </>
          ) : (
            // mobile
            <>
              <MainContainer
                height={height}
                toggleOpen={toggleSidebar}
                openModal={openModal}
              ></MainContainer>
              <MobileToggleBtn
                toggleOpen={toggleSidebar}
                onClick={toggleSidebarFunc}
              ></MobileToggleBtn>
            </>
          )}
          {notMobile === true ? ( // pc
            <Sidebar
              width={width}
              height={height}
              toggleOpen={toggleSidebar}
              openSidebar={toggleSidebarFunc}
              openModal={openModal}
            ></Sidebar>
          ) : (
            // mobile
            <MobileSidebar
              width={mobileWidth}
              height={closedMobileSidebarHeight}
              toggleOpen={mobileToggleSidebar}
              openSidebar={toggleSidebarFunc}
              openModal={openModal}
            ></MobileSidebar>
          )}
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            modalType={modalType}
            setModalType={setModalType}
          ></Modal>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
            autoHideDuration={2000}
          >
            <Alert onClose={handleClose} severity={snackBar.type}>
              {snackBar.msg}
            </Alert>
          </Snackbar>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
