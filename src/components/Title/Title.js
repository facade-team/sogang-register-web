import React, { useEffect, useState } from 'react';
import { Container, TitleComp } from './Title.element';
import ProfileBar from '../ProfileBar/ProfileBar';

const Title = ({ title, openModal, widthPx }) => {
  const [notMobile, setNotMobile] = useState(
    window.matchMedia('(min-width: 600px)').matches
  ); // true : pc, false : mobile

  useEffect(() => {
    var notWidth = window.matchMedia('(min-width: 600px)').matches;
    setNotMobile(notWidth);
  });

  return (
    <Container>
      <TitleComp>{title}</TitleComp>
      {notMobile === true ? ( // pc
        !widthPx ? (
          <ProfileBar openModal={openModal}></ProfileBar>
        ) : null
      ) : (
        <></>
      )}
    </Container>
  );
};

export default Title;
