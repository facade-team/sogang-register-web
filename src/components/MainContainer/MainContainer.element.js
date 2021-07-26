import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: ${({ widthPx }) => `${window.innerWidth - widthPx}px`};
  transition: 0.8s ease;
  margin-left: ${({ widthPx }) => `${widthPx}px`};
`;

export const Content = styled.div`
  width: 90%;
  background: #ffffff;
  /* margin-left: 50px; */
  height: 800px;
  max-height: 800px;
  border-radius: 10px;
`;
