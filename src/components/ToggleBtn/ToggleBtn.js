import React, { useEffect } from 'react';
import { MdMenu, MdCancel } from 'react-icons/md';
import { ImgBox } from './ToggleBtn.element';

const ToggleBtn = ({ toggleOpen, widthVW, onClick }) => {
  return (
    <>
      <ImgBox onClick={onClick} toggleSidebar={toggleOpen} widthVW={widthVW}>
        {!toggleOpen ? (
          <MdMenu size="25"></MdMenu>
        ) : (
          <MdCancel size="25"></MdCancel>
        )}
      </ImgBox>
    </>
  );
};

export default ToggleBtn;
