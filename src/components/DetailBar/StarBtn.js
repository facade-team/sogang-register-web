import { useState } from 'react';
import styled from 'styled-components';
import { MdStars } from 'react-icons/md';

// styling
const CustomStar = styled(MdStars)`
  cursor: pointer;
`;

const StarBtn = ({ size, checkBookmark, onClick }) => {
  return (
    <>
      {checkBookmark ? (
        <CustomStar size={size} color="#ED0092" onClick={onClick}></CustomStar>
      ) : (
        <CustomStar
          size={size}
          color="lightgray"
          onClick={onClick}
        ></CustomStar>
      )}
    </>
  );
};

export default StarBtn;
