import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdSearch, MdChatBubbleOutline } from 'react-icons/md';
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
} from './MobileSidebar.element';

const MobileSideBar = ({
  width,
  height,
  toggleOpen,
  openModal,
  openSidebar,
  navClick,
}) => {
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
      {toggleOpen === false ? (
        <SidebarComponent
          widthPx={width}
          heightPx={height}
          toggleOpen={toggleOpen}
        >
          <ServiceName>
            <Link to="/">
              <MainLogo src={Logo}></MainLogo>
              <Sogang>서강</Sogang>
              <Register>신청</Register>
            </Link>
          </ServiceName>
        </SidebarComponent>
      ) : (
        <SidebarComponent
          widthPx={width}
          heightPx={height}
          toggleOpen={toggleOpen}
        >
          <ServiceName>
            <Link to="/" onClick={navClick}>
              <MainLogo src={Logo}></MainLogo>
              <Sogang>서강</Sogang>
              <Register>신청</Register>
            </Link>
          </ServiceName>
          <GradationBtn
            onClick={openModal}
            signBtnType={'login'}
            width={200}
            top={160}
            borderRadius={15}
            position={'absolute'}
            active
          ></GradationBtn>
          <NavigationList>
            <Navigation>
              <CustomLink to="/" onClick={navClick}>
                <Icon search={menu}>
                  <MdSearch />
                </Icon>
                <NavMenu search={menu}>개설교과목 검색</NavMenu>
              </CustomLink>
            </Navigation>
            <Navigation>
              <CustomLink to="/mypage" onClick={navClick}>
                <Icon mypage={menu}>
                  <BsGrid />
                </Icon>
                <NavMenu search={menu}>마이페이지</NavMenu>
              </CustomLink>
            </Navigation>
            <Navigation>
              <CustomLink to="/feedback" onClick={navClick}>
                <Icon mypage={menu}>
                  <MdChatBubbleOutline />
                </Icon>
                <NavMenu search={menu}>피드백/문의</NavMenu>
              </CustomLink>
            </Navigation>
          </NavigationList>
        </SidebarComponent>
      )}
    </>
  );
};

export default MobileSideBar;
