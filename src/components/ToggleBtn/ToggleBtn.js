import React from 'react';

//styled
import { ImgBox, OpenBtn, CloseBtn } from './ToggleBtn.element';

const ToggleBtn = ({ toggleOpen, width, onClick }) => {
  return (
    <>
      <ImgBox onClick={onClick} toggleSidebar={toggleOpen} widthPx={width}>
        {!toggleOpen ? (
          <OpenBtn size="25"></OpenBtn>
        ) : (
          <CloseBtn size="25"></CloseBtn>
        )}
      </ImgBox>
    </>
  );
};

export default ToggleBtn;
