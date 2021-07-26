import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdChatBubbleOutline } from 'react-icons/md';
import { BsGrid } from 'react-icons/bs';

//components
import Logo from '../../img/logo.png';
import GradationBtn from '../GradationBtn/GradationBtn';

//styled
import {
  SidebarComponent,
  MainLogo,
  Sogang,
  Register,
  SidebarContent,
  ServiceName,
  NavigationList,
  Navigation,
  Icon,
  CustomLink,
  NavMenu,
} from './Sidebar.element';

const SideBar = ({ width, toggleOpen, openModal }) => {
  const [initial, setInitial] = useState(true);
  const [toggleText, setToggleText] = useState(true);
  useEffect(() => {
    if (initial) {
      setToggleText(!toggleText);
      setInitial(!initial);
      return;
    }

    setTimeout(() => {
      setToggleText(!toggleText);
    }, 200);
  }, [toggleOpen]);
  return (
    <>
      <SidebarComponent widthPx={width} toggleOpen={toggleOpen}>
        <SidebarContent>
          <ServiceName>
            <Link to="/">
              <MainLogo src={Logo}></MainLogo>
              {toggleOpen && !toggleText ? (
                <>
                  <Sogang toggleOpen={toggleOpen}>서강</Sogang>
                  <Register toggleOpen={toggleOpen}>신청</Register>
                </>
              ) : null}
            </Link>
          </ServiceName>
          {toggleOpen && !toggleText ? (
            <>
              <GradationBtn
                onClick={openModal}
                signBtnType={'login'}
              ></GradationBtn>
            </>
          ) : null}

          <NavigationList active={0}>
            <Navigation>
              {toggleOpen && !toggleText ? (
                <>
                  <CustomLink to="/">
                    <Icon>
                      <MdSearch></MdSearch>
                    </Icon>
                    <NavMenu>개설교과목 검색</NavMenu>
                  </CustomLink>
                </>
              ) : (
                <>
                  <CustomLink to="/">
                    <Icon>
                      <MdSearch></MdSearch>
                    </Icon>
                  </CustomLink>
                </>
              )}
            </Navigation>
            <Navigation>
              {toggleOpen && !toggleText ? (
                <>
                  <CustomLink to="/Mypage">
                    <Icon>
                      <BsGrid></BsGrid>
                    </Icon>
                    <NavMenu>마이페이지</NavMenu>
                  </CustomLink>
                </>
              ) : (
                <>
                  <CustomLink to="/Mypage">
                    <Icon>
                      <BsGrid></BsGrid>
                    </Icon>
                  </CustomLink>
                </>
              )}
            </Navigation>
            <Navigation>
              {toggleOpen && !toggleText ? (
                <>
                  <CustomLink to="/feedback">
                    <Icon>
                      <MdChatBubbleOutline></MdChatBubbleOutline>
                    </Icon>
                    <NavMenu>피드백/문의</NavMenu>
                  </CustomLink>
                </>
              ) : (
                <>
                  <CustomLink to="/feedback">
                    <Icon>
                      <MdChatBubbleOutline></MdChatBubbleOutline>
                    </Icon>
                  </CustomLink>
                </>
              )}
            </Navigation>
          </NavigationList>
        </SidebarContent>
      </SidebarComponent>
    </>
  );
};

export default SideBar;
