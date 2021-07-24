import React from 'react';
import { MdSearch, MdContacts } from 'react-icons/md';
import {
  NavbarComponent,
  NavbarContent,
  ServiceName,
  NavigationList,
  Navigation,
} from './Sidebar.element';
import { Link } from 'react-router-dom';

const SideBar = ({ widthVW, toggleOpen }) => {
  return (
    <NavbarComponent widthVW={widthVW} toggleOpen={toggleOpen}>
      <NavbarContent>
        <ServiceName>
          <Link to="/">서강신청</Link>
        </ServiceName>
        <NavigationList active={0}>
          <Navigation>
            <MdSearch></MdSearch>
            <Link to="/">개설교과목 검색</Link>
          </Navigation>
          <Navigation>
            <MdContacts></MdContacts>
            <Link to="/feedback">피드백/문의</Link>
          </Navigation>
        </NavigationList>
      </NavbarContent>
    </NavbarComponent>
  );
};

export default SideBar;
