import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${({ widthVW }) => `${100 - widthVW}vw`};
  transition: 0.8s ease;
  margin-left: ${({ widthVW }) => `${widthVW}vw`};
`;

export const BtnContainer = styled.div`
  width: 350px;
  display: flex;
  position: absolute;
  right: 30px;
  top: 20px;
  justify-content: space-around;
  align-items: center;
`;
