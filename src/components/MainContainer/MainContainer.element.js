import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  /* width: ${({ widthPx }) => `${window.innerWidth - widthPx}px`}; */
  ${({ widthPx }) => `width: calc( 100% - ${widthPx}px);`}
  transition: 0.8s ease;
  margin-left: ${({ widthPx }) => `${widthPx}px`};

  @media screen and (max-width: 805px){
    //margin-left: 0px;
    //width: 0;
  @media screen and (max-width: 600px) {
    top: 60px;
    width: 100%;
  }
`;
