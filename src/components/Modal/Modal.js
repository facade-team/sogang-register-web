import React, { useRef, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import ModalForm from './ModalForm';
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

  const { isAuth } = useAuthContext();

  useEffect(() => {
    if (isAuth) {
      setShowModal(false);
    }
  }, [isAuth]);

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
        </Background>
      )}
    </AnimatePresence>
  );
};

export default Modal;
