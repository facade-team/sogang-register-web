import React, { useState, useEffect } from 'react';
import { MdSearch, MdContacts } from 'react-icons/md';
import {
  NavbarComponent,
  NavbarContent,
  ServiceName,
  NavigationList,
  Navigation,
} from './Navbar.element';

const SideBar = ({ widthVW, toggleOpen }) => {
  return (
    <>
      <NavbarComponent widthVW={widthVW} toggleOpen={toggleOpen}>
        <NavbarContent>
          <ServiceName>
            <span>서강신청</span>
          </ServiceName>
          <NavigationList active={0}>
            <Navigation>
              <MdSearch></MdSearch>
              <span>개설교과목 검색</span>
            </Navigation>
            <Navigation>
              <MdContacts></MdContacts>
              <span>피드백/문의</span>
            </Navigation>
          </NavigationList>
        </NavbarContent>
      </NavbarComponent>
    </>
  );
};

export default SideBar;
