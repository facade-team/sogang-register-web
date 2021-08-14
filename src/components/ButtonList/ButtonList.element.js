import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  height: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    min-height: 200px;
  }
`;

export const Buttons = styled.div`
  height: 80%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 900px) {
    width: 100%;
    min-height: 200px;
    align-items: center;
    margin-top: 25.5px;
    margin-bottom: 5px;
  }
`;
