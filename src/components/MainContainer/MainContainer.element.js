import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  height: 100%;
  width: ${({ widthPx }) => `${window.innerWidth - widthPx}px`};
  transition: 0.8s ease;
  margin-left: ${({ widthPx }) => `${widthPx}px`};
`;
