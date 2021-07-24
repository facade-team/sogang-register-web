import React from 'react';
import { MdSentimentNeutral } from 'react-icons/md';
import {
  ProfileContainer,
  ProfileIMG,
  NameMajorWrapper,
  Name,
  Major,
} from './Profile.element';

const Profile = ({ userName, userMajor }) => {
  return (
    <ProfileContainer>
      <ProfileIMG>
        <MdSentimentNeutral size="50px"></MdSentimentNeutral>
      </ProfileIMG>
      <NameMajorWrapper>
        <Name>
          <span className="name">{userName}</span>
        </Name>
        <Major>
          <span className="major">{userMajor}</span>
        </Major>
      </NameMajorWrapper>
    </ProfileContainer>
  );
};

export default Profile;
