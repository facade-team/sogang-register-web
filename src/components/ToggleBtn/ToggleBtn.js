import React from 'react';
import { MdMenu, MdCancel } from 'react-icons/md';

//styled
import { ImgBox } from './ToggleBtn.element';

const ToggleBtn = ({ toggleOpen, width, onClick }) => {
  return (
    <>
      <ImgBox onClick={onClick} toggleSidebar={toggleOpen} widthPx={width}>
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
