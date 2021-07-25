import React, { useState } from 'react';
import { BarContainer, BarName, BtnContainer } from './TopBar.element';
import SignBtn from '../SignBtn/SignBtn';
import Profile from '../Profile/Profile';
import Modal from '../Modal/Modal';

const TopBar = (props) => {
  const [LoginStatus, setLoginStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = (signBtnType) => {
    setShowModal((prev) => !prev);
    setModalType(signBtnType);
  };

  const BarData = (props) => {
    return (
      <>
        <BarName>{props.name}</BarName>
        <BtnContainer>
          <SignBtn onClick={openModal} signBtnType={'login'}></SignBtn>
          <SignBtn onClick={openModal} signBtnType={'signup'}></SignBtn>
          <Profile userName="최현수" userMajor="컴퓨터공학과"></Profile>
        </BtnContainer>
      </>
    );
  };

  return (
    <>
      <BarContainer>
        <BarData name={props.name} />
      </BarContainer>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalType={modalType}
        setModalType={setModalType}
      ></Modal>
    </>
  );
};

export default TopBar;
