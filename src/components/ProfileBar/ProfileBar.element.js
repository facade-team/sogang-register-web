import styled, { css } from 'styled-components';

export const BarContainer = styled.div`
  ${({ detailbar }) =>
    detailbar
      ? css`
          position: relative;
          top: 40px;
        `
      : css`
          margin-right: 20px;
        `}
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  cursor: pointer;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 600;
  color: #61527f;
  margin-left: 16px;
`;

export const Name = styled.p`
  margin-bottom: 4px;
`;

export const Major = styled.p`
  font-size: 14px;
`;
