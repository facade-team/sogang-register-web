import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 900px) {
    width: 100%;
    top: 60px;
    height: auto;
  }
  @media screen and (max-width: 600px) {
    height: 100%;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
