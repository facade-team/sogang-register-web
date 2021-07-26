import React, { useState } from 'react';
import { Bar, BarContainer, BarName, BtnContainer } from './TopBar.element';
import SignBtn from '../SignBtn/SignBtn';
import Profile from '../Profile/Profile';

const TopBar = ({ name, openModal }) => {
  const [LoginStatus, setLoginStatus] = useState('');

  return (
    <>
      <Bar>
        <BarContainer>
          <BarName>{name}</BarName>
          <BtnContainer>
            <SignBtn onClick={openModal} signBtnType={'login'}></SignBtn>
            <SignBtn onClick={openModal} signBtnType={'signup'}></SignBtn>
            <Profile userName="최현수" userMajor="컴퓨터공학과"></Profile>
          </BtnContainer>
        </BarContainer>
      </Bar>
    </>
  );
};

export default TopBar;
