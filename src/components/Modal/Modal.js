import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import ModalForm from './ModalForm';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import logo from '../../assets/img/logo2.png';
import { useAuthContext } from '../../contexts/AuthContext';

import {
  Background,
  modalVariant,
  ModalContainer,
  ModalLogo,
  LogoImg,
  LogoText1,
  LogoText2,
  ModalContent,
  ModalCloseBtn,
} from './Modal.element';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Modal = ({ showModal, setShowModal, modalType, setModalType }) => {
  const BgRef = useRef();
  const closeModal = (e) => {
    if (BgRef.current === e.target) {
      setShowModal(false);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  }, [keyPress]);

  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const { isAuth, error } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
      setShowModal(false);
    }
  }, [isAuth]);

  useEffect(() => {
    if (error) {
      setState({ ...state, open: true });
    }
  }, [error]);

  return (
    <AnimatePresence>
      {showModal && (
        <Background
          ref={BgRef}
          onClick={closeModal}
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer>
            <ModalLogo modalType={modalType}>
              <LogoImg src={logo}></LogoImg>
              <LogoText1>서강</LogoText1>
              <LogoText2>신청</LogoText2>
            </ModalLogo>
            <ModalContent modalType={modalType}>
              <ModalForm
                modalType={modalType}
                setModalType={setModalType}
                setShowModal={setShowModal}
              ></ModalForm>
            </ModalContent>

            <ModalCloseBtn
              onClick={() => setShowModal(!showModal)}
            ></ModalCloseBtn>
          </ModalContainer>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={handleClose}
            key={vertical + horizontal}
            autoHideDuration={2000}
          >
            <Alert onClose={handleClose} severity="error">
              로그인에 실패하였습니다
            </Alert>
          </Snackbar>
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Modal;
