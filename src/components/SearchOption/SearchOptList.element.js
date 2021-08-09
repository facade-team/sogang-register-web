import styled, { css } from 'styled-components';
import { Tag, TagContainer } from '../Card/Card.element';

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5px;
  margin-bottom: 5px;
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: all 0.3s ease;
    z-index: 3;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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

  ${({ selected }) =>
    selected &&
    css`
      color: white;
      /* background: #747d8c; */
      ${({ bgColor }) => bgColor && `background: ${bgColor};`}
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default,
      color: white;
      background: #747d8c;
      /* ${({ bgColor }) => bgColor && `background: ${bgColor};`} */
    `}
`;

export const TagContainer2 = styled(TagContainer)`
  align-items: center;
  padding: 8px;
  flex-wrap: wrap;
  cursor: pointer;
`;

export const Tag2 = styled(Tag)`
  min-width: fit-content;
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 6px;
`;
