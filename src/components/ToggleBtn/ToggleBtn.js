import React from 'react';
import { MdMenu, MdCancel } from 'react-icons/md';
import { ImgBox } from './ToggleBtn.element';

const ToggleBtn = ({ toggleOpen, widthVW, openSidebar, closeSidebar }) => {
  return (
    <>
      <ImgBox toggleSidebar={toggleOpen} widthVW={widthVW}>
        {!toggleOpen ? (
          <MdMenu onClick={openSidebar} size="25"></MdMenu>
        ) : (
          <MdCancel onClick={closeSidebar} size="25"></MdCancel>
        )}
      </ImgBox>
    </>
  );
};

export default ToggleBtn;
