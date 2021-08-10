import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

export const HomeContainer = styled.div`
  /* width: ${({ widthPx }) => `calc( 100% - ${widthPx}px);`}; */
  ${({ widthPx, navigation }) => {
    if (navigation) {
      if (navigation === 'Home') {
        return `width: calc(100% - ${widthPx}px);`;
      } else {
        return 'width: 100%;';
      }
    }
  }}
  min-width: 600px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 40px 50px 40px 50px;
  overflow: auto;
  @media screen and (max-width: 600px) {
    width: 100%;
    min-width: 200px;
    padding: 20px 20px 20px 20px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
