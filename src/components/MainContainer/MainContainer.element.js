import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const MainContainerComp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: ${({ widthPx }) => `${window.innerWidth - widthPx}px`};
  transition: 0.8s ease;
  margin-left: ${({ widthPx }) => `${widthPx}px`};
`;

export const MainContent = styled.div`
  width: 90%;
  background: #ffffff;
  /* margin-left: 50px; */
  height: 800px;
  max-height: 800px;
  border-radius: 10px;
`;
