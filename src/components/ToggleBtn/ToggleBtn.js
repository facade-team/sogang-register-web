import React from 'react';
import { FaAngleDoubleLeft } from 'react-icons/fa';

//styled
import { ImgBox } from './ToggleBtn.element';

const ToggleBtn = ({ toggleOpen, width, onClick }) => {
  return (
    <>
      <ImgBox onClick={onClick} toggleSidebar={toggleOpen} widthPx={width}>
        {!toggleOpen ? null : ( // <OpenBtn size="25"></OpenBtn>
          <FaAngleDoubleLeft size="25" color="white"></FaAngleDoubleLeft>
        )}
      </ImgBox>
    </>
  );
};

export default ToggleBtn;
