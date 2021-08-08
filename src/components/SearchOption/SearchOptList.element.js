import styled, { css } from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-wrap: wrap;
`;

export const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

export const OptBtn = styled.button`
  color: #34495e;
  border: none;
  border-radius: 12px;
  width: 120px;
  min-width: 80px;
  height: 100%;
  padding: 10px 1px;
  z-index: 2;
  margin: 6px 8px;
  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: all 0.3s ease;
    z-index: 3;
  }

  ${(props) =>
    props.focused === false &&
    css`
      background: rgb(164, 129, 235);
      background: linear-gradient(
        90deg,
        rgba(164, 129, 235, 1) 0%,
        rgba(148, 107, 232, 1) 26%,
        rgba(139, 121, 226, 1) 45%,
        rgba(53, 95, 169, 1) 98%
      );
    `};
  ${(props) =>
    props.focused === true &&
    css`
      border: 1px;
      z-index: 2;
    `};
`;
