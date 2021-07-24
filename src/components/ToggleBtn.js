import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MdMenu, MdCancel } from 'react-icons/md';

const ImgBox = styled.div`
  position: absolute;
  top: 0vh;
  left: 0vh;
  height: 25px;
  width: 25px;
  padding: 10px;
  outline: none;
  transition: 0.8s ease;
  transform: ${(props) => `translatex(${props.widthVW}vw)`};

  &:hover {
    cursor: pointer;
    background-color: #b60004;
  }
`;

const ToggleBtn = ({ toggleOpen, widthVW, onClick }) => {
  return (
    <>
      <ImgBox onClick={onClick} toggleSidebar={toggleOpen} widthVW={widthVW}>
        {!toggleOpen ? (
          <MdMenu style={{ width: '25px', height: '25px' }}></MdMenu>
        ) : (
          <MdCancel style={{ width: '25px', height: '25px' }}></MdCancel>
        )}
      </ImgBox>
    </>
  );
};

export default ToggleBtn;
