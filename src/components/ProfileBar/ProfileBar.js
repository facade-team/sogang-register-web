import React from 'react';

// icon
import { IoPersonCircleOutline } from 'react-icons/io5';

// component
import GradationBtn from '../GradationBtn/GradationBtn';

// styled
import {
  BarContainer,
  ProfileContainer,
  Avatar,
  Detail,
  Name,
  Major,
} from './ProfileBar.element';
// context
import { useAuthContext } from '../../contexts/AuthContext';

const ProfileBar = ({ openModal, detailbar }) => {
  const { isAuth, logout, userData } = useAuthContext();
  return (
    <BarContainer detailbar={detailbar}>
      {isAuth ? (
        <ProfileContainer>
          <Avatar>
            <IoPersonCircleOutline size="40"></IoPersonCircleOutline>
          </Avatar>
          <Detail>
            <Name>{userData.name}</Name>
            <Major>{userData.major} 전공</Major>
          </Detail>
        </ProfileContainer>
      ) : (
        <GradationBtn
          onClick={openModal}
          signBtnType={'login'}
          width={200}
          borderRadius={8}
          active
          marginRight={10}
        >
          로그인/회원가입
        </GradationBtn>
      )}
    </BarContainer>
  );
};

export default ProfileBar;
