import styled, { css } from 'styled-components';

export const GradationBtnComp = styled.button`
  ${({ active }) =>
    active
      ? css`
          background-color: rgb(164, 129, 235);
          background: linear-gradient(
            90deg,
            rgba(164, 129, 235, 1) 0%,
            rgba(148, 107, 232, 1) 26%,
            rgba(139, 121, 226, 1) 45%,
            rgba(53, 95, 169, 1) 98%
          );
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border: 1px;
          color: #ffffff;
          z-index: 1;
          transition: 0.3s;
          &:hover {
            cursor: pointer;
            transform: scale(1.04);
            transition: all 0.3s ease;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
          }
        `
      : css`
          background-color: rgb(255, 255, 255);
          color: #6a31df;
          border: 2px solid #d9d9d9;
        `}
  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: all 0.3s ease;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  /* border: none; */
  border-radius: ${({ borderRadius, active }) =>
    `${borderRadius}px ${borderRadius}px ${borderRadius}px ${borderRadius}px`};
  width: ${({ widthPx }) => `${widthPx}px`};
  height: ${({ height }) => `${height}px`};
  padding: 10px 1px;
  position: ${({ position }) => `${position}`};
  top: ${({ top }) => `${top}px`};
  margin-right: ${({ marginRight }) => `${marginRight}px`};
`;
