import styled, { css } from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
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

export const ListContainer = styled.div`
  display: flex;
  width: 140px;
  height: 40px;
  align-items: center; //세로
  justify-content: center; //가로
  background-color: transparent;
  margin-bottom: 5px;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ListBtn = styled.button`
  background: rgb(164, 129, 235);
  background: linear-gradient(
    90deg,
    rgba(164, 129, 235, 1) 0%,
    rgba(148, 107, 232, 1) 26%,
    rgba(139, 121, 226, 1) 45%,
    rgba(53, 95, 169, 1) 98%
  );
  border: 1px none;
  border-radius: 20px;
  color: #ffffff;
  width: 120px;
  min-width: 80px;
  height: 100%;
  padding: 10px 1px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    z-index: 2;
  }

  ${(props) =>
    props.focused === false &&
    css`
      background: white;
      color: black;
      border: 2px solid rgb(217, 217, 217);
    `};
  ${(props) =>
    props.focused === true &&
    css`
      border: 1px;
      z-index: 1;
    `};
`;
