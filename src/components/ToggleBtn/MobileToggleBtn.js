import React from 'react';
import { FaBars } from 'react-icons/fa';

//styled
import { ImgBox } from './MobileToggleBtn.element';

const MobileToggleBtn = ({ toggleOpen, width, onClick }) => {
  return (
    <>
      <ImgBox onClick={onClick} toggleSidebar={toggleOpen} widthPx={width}>
        <FaBars size="25" color="white"></FaBars>
      </ImgBox>
    </>
  );
};

export default MobileToggleBtn;
