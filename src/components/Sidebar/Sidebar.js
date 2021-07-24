import React from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdContacts } from 'react-icons/md';

//styled
import {
  SidebarComponent,
  SidebarContent,
  ServiceName,
  NavigationList,
  Navigation,
} from './Sidebar.element';

const SideBar = ({ widthVW, toggleOpen }) => {
  return (
    <>
      <SidebarComponent widthVW={widthVW} toggleOpen={toggleOpen}>
        <SidebarContent>
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
        </SidebarContent>
      </SidebarComponent>
    </>
  );
};

export default SideBar;
