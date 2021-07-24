import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: ${({ widthVW }) => `(100 - ${widthVW})vw`};
  transition: 0.8s ease;
  margin-left: ${({ widthVW }) => `${widthVW}vw`};
`;
