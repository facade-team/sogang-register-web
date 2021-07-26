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
        <SidebarContent toggleOpen={toggleOpen}>
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
                width={150}
                top={12}
                borderRadius={20}
              ></GradationBtn>
            </>
          ) : null}

          <NavigationList active={0}>
            <Navigation>
              {toggleOpen && !toggleText ? (
                <>
                  <Icon>
                    <MdSearch></MdSearch>
                  </Icon>
                  <Link to="/">개설교과목 검색</Link>
                </>
              ) : (
                <>
                  <Link to="/">
                    <Icon>
                      <MdSearch></MdSearch>
                    </Icon>
                  </Link>
                </>
              )}
            </Navigation>
            <Navigation>
              {toggleOpen && !toggleText ? (
                <>
                  <Icon>
                    <BsGrid></BsGrid>
                  </Icon>
                  <Link to="/Mypage">마이페이지</Link>
                </>
              ) : (
                <>
                  <Link to="/Mypage">
                    <Icon>
                      <BsGrid></BsGrid>
                    </Icon>
                  </Link>
                </>
              )}
            </Navigation>
            <Navigation>
              {toggleOpen && !toggleText ? (
                <>
                  <Icon>
                    <MdChatBubbleOutline></MdChatBubbleOutline>
                  </Icon>
                  <Link to="/feedback">피드백/문의</Link>
                </>
              ) : (
                <>
                  <Link to="/feedback">
                    <Icon>
                      <MdChatBubbleOutline></MdChatBubbleOutline>
                    </Icon>
                  </Link>
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
