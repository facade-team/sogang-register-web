import styled from 'styled-components';

export const ImgBox = styled.div`
  position: absolute;
  top: 0vh;
  left: 0vh;
  padding: 10px;
  outline: none;
  transition: 0.8s ease;
  transform: ${(props) => {
    return `translatex(${props.widthPx}px)`;
  }};

  &:hover {
    cursor: pointer;
    background-color: #b60004;
  }
`;
