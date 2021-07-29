import React from 'react';
import { Container, TitleComp } from './Title.element';
import ProfileBar from '../ProfileBar/ProfileBar';

const Title = ({ title, openModal, widthPx }) => {
  return (
    <Container>
      <TitleComp>{title}</TitleComp>
      {!widthPx ? <ProfileBar openModal={openModal}></ProfileBar> : null}
    </Container>
  );
};

export default Title;
