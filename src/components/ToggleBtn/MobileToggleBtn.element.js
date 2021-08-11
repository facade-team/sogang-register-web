import styled from 'styled-components';

export const ImgBox = styled.div`
  position: absolute;
  outline: none;

  transition: 0.9s ease;
  transform: ${(props) => {
    return `translatex(${props.widthPx}px)`;
  }};
  z-index: 1;
  /* width: 25px; */
  right: 20px;
  top: 15px;

  &:hover {
    cursor: pointer;
  }
`;
