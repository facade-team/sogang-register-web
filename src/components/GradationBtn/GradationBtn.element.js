import styled from 'styled-components';

export const GradationBtnComp = styled.button`
  background: rgb(164, 129, 235);
  background: linear-gradient(
    90deg,
    rgba(164, 129, 235, 1) 0%,
    rgba(148, 107, 232, 1) 26%,
    rgba(139, 121, 226, 1) 45%,
    rgba(53, 95, 169, 1) 98%
  );
  /* border: none; */
  border: 1px;
  border-radius: ${({ borderRadius }) =>
    `${borderRadius}px ${borderRadius}px ${borderRadius}px ${borderRadius}px`};
  box-shadow: 0px 3px 6px 2px rgba(0, 0, 0, 0.34);
  color: #ffffff;
  width: ${({ widthPx }) => `${widthPx}px`};
  padding: 10px 1px;
  position: relative;
  /* top: 12vh; */
  top: ${({ top }) => `${top}vh`};

  &:hover {
    cursor: pointer;
    transform: scale(1.05) translateZ(0px);
  }
`;
