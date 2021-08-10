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
    <SidebarComponent
      widthPx={width}
      heightPx={height}
      toggleOpen={toggleOpen}
    ></SidebarComponent>
  );
};

export default MobileSideBar;
