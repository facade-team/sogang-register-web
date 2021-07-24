import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdSearch, MdContacts } from 'react-icons/md';

const SidebarComponent = styled.div`
  position: absolute;
  left: ${(props) => (props.toggleOpen ? `${-props.widthVW}vw` : 0)};
  text-align: center;
  top: 0%;
  height: 100%;
  width: 15vw;
  border-right: 1px solid;
  border-radius: 0;
  border-color: rgba(62, 194, 133, 0.693);
  background-color: rgb(255, 255, 255);
  transform: ${(props) => `translatex(${props.widthVW}vw)`};
  transition: 0.8s ease;
  z-index: 1;
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceName = styled.div`
  position: relative;
  top: 5vh;
  font-size: 2rem;
  font-weight: 800;
  color: #b60004;
`;

const NavigationList = styled.div`
  position: relative;
  top: 20vh;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(${(props) => props.active}) {
    font-weight: 700;
    color: rgba(182, 0, 4, 1);
  }
`;

const SideBar = ({ widthVW, toggleOpen }) => {
  return (
    <>
      <SidebarComponent widthVW={widthVW} toggleOpen={toggleOpen}>
        <SidebarContent>
          <ServiceName>
            <span>서강신청</span>
          </ServiceName>
          <NavigationList active={0}>
            <div className="navigation">
              <MdSearch></MdSearch>
              <span>개설교과목 검색</span>
            </div>
            <div className="navigation">
              <MdContacts></MdContacts>
              <span>피드백/문의</span>
            </div>
          </NavigationList>
        </SidebarContent>
      </SidebarComponent>
    </>
  );
};

export default SideBar;
