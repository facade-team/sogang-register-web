import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdChatBubbleOutline, MdInfoOutline } from 'react-icons/md';

import { BsGrid } from 'react-icons/bs';
import { RiMenuFill } from 'react-icons/ri';

import { useMenuContext } from '../../contexts/MenuContext';
import { useAuthContext } from '../../contexts/AuthContext';

//components
import Logo from '../../assets/img/logo.png';
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

const SideBar = ({ width, height, toggleOpen, openModal, openSidebar }) => {
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

  const { menu } = useMenuContext();
  const { isAuth } = useAuthContext();

  return (
    <>
      <SidebarComponent
        heightPx={height}
        widthPx={width}
        toggleOpen={toggleOpen}
      >
        <SidebarContent toggleOpen={toggleOpen}>
          {toggleOpen && !toggleText ? (
            <ServiceName>
              <Link to="/">
                <MainLogo src={Logo}></MainLogo>
                <Sogang toggleOpen={toggleOpen}>서강</Sogang>
                <Register toggleOpen={toggleOpen}>신청</Register>
              </Link>
            </ServiceName>
          ) : (
            <ServiceName onClick={openSidebar}>
              <RiMenuFill
                color="white"
                style={{ cursor: 'pointer' }}
              ></RiMenuFill>
            </ServiceName>
          )}
          {toggleOpen && !toggleText && isAuth ? (
            <>
              <GradationBtn
                onClick={openModal}
                signBtnType={'login'}
                width={100}
                top={160}
                borderRadius={15}
                position={'relative'}
                active
              ></GradationBtn>
            </>
          ) : null}

          <NavigationList>
            <Navigation>
              {toggleOpen && !toggleText ? (
                <>
                  <CustomLink to="/">
                    <Icon search={menu}>
                      <MdSearch></MdSearch>
                    </Icon>
                    <NavMenu search={menu}>개설교과목 검색</NavMenu>
                  </CustomLink>
                </>
              ) : (
                <>
                  <CustomLink to="/">
                    <Icon search={menu}>
                      <MdSearch></MdSearch>
                    </Icon>
                  </CustomLink>
                </>
              )}
            </Navigation>
            <Navigation>
              {toggleOpen && !toggleText ? (
                <>
                  <CustomLink to="/mypage">
                    <Icon mypage={menu}>
                      <BsGrid></BsGrid>
                    </Icon>
                    <NavMenu mypage={menu}>마이페이지</NavMenu>
                  </CustomLink>
                </>
              ) : (
                <>
                  <CustomLink to="/mypage">
                    <Icon mypage={menu}>
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
                    <Icon feedback={menu}>
                      <MdChatBubbleOutline></MdChatBubbleOutline>
                    </Icon>
                    <NavMenu feedback={menu}>피드백/문의</NavMenu>
                  </CustomLink>
                </>
              ) : (
                <>
                  <CustomLink to="/feedback">
                    <Icon feedback={menu}>
                      <MdChatBubbleOutline></MdChatBubbleOutline>
                    </Icon>
                  </CustomLink>
                </>
              )}
            </Navigation>
            {/* <Navigation>
              {toggleOpen && !toggleText ? (
                <>
                  <CustomLink to="/info">
                    <Icon info={menu}>
                      <MdInfoOutline></MdInfoOutline>
                    </Icon>
                    <NavMenu info={menu}>서비스 소개</NavMenu>
                  </CustomLink>
                </>
              ) : (
                <>
                  <CustomLink to="/info">
                    <Icon info={menu}>
                      <MdInfoOutline></MdInfoOutline>
                    </Icon>
                  </CustomLink>
                </>
              )}
            </Navigation> */}
          </NavigationList>
        </SidebarContent>
      </SidebarComponent>
    </>
  );
};

export default SideBar;
