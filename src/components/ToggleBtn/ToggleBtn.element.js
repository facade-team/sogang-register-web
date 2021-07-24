import styled from 'styled-components';

export const ImgBox = styled.div`
  position: absolute;
  top: 0vh;
  left: 0vh;
  padding: 10px;
  outline: none;
  transition: 0.8s ease;
  transform: ${(props) => `translatex(${props.widthVW}vw)`};

  &:hover {
    cursor: pointer;
    background-color: #b60004;
  }
`;
