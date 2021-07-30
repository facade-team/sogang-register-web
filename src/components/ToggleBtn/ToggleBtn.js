import React from 'react';
import { BsChevronDoubleLeft } from 'react-icons/bs';
import { RiMenuFill } from 'react-icons/ri';
//styled
import { ImgBox } from './ToggleBtn.element';

const ToggleBtn = ({ toggleOpen, width, onClick }) => {
  return (
    <>
      <ImgBox onClick={onClick} toggleSidebar={toggleOpen} widthPx={width}>
        {!toggleOpen ? (
          <RiMenuFill size="25"></RiMenuFill>
        ) : (
          <BsChevronDoubleLeft size="25"></BsChevronDoubleLeft>
        )}
      </ImgBox>
    </>
  );
};

export default ToggleBtn;
