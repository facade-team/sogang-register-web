import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/mypage">
            <Avatar>
              <IoPersonCircleOutline
                size="40"
                color="#7F7F7F"
              ></IoPersonCircleOutline>
            </Avatar>
          </Link>
          {userData.major ? (
            <Detail>
              <Name>{userData.username}</Name>
              <Major>{userData.major[0]} 전공</Major>
            </Detail>
          ) : null}
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
