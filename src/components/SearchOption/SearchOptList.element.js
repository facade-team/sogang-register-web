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
      cursor: default;
      /* background: #b2bec3;
      color: #34495e; */
      &:hover {
        cursor: default;
        transform: unset;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      }
    `}
    @media screen and (max-width: 900px) {
    width: 120px;
  }
  /* @media screen and (max-width: 600px) {
    width: 100px;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 450px) {
    width: 100px;
    margin-left: 40px;
    margin-right: 0px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 360px) {
    width: 100px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 319px) {
    width: 100px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
  } */
`;

export const TagContainer2 = styled(TagContainer)`
  align-items: center;
  padding: 8px;
  flex-wrap: wrap;
  height: fit-content;
`;

export const Tag2 = styled(Tag)`
  min-width: fit-content;
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 6px;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: all 0.3s ease;
  }

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      &:hover {
        transform: unset;
        transition: unset;
      }
    `}

  ${({ deactive }) =>
    deactive &&
    css`
      background-color: #b2bec3;
      cursor: default;
      &:hover {
        transform: unset;
        transition: unset;
      }
    `}
`;
