import styled, { css } from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  place-self: flex-start;
  position: relative;
`;

export const ListContainer = styled.div`
  display: flex;
  width: 140px;
  height: 40px;
  align-items: center; // 세로
  justify-content: center; // 가로
  background-color: transparent;
  margin-bottom: 5px;
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
  min-width: 80px;
  max-width: 120px;
  width: 120px;
  height: 100%;
  padding: 10px 1px;
  z-index: unset;

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

export const FilterArea = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 20px;
  align-items: center;
`;

export const CurrentFilterList = styled.button`
  background: rgb(164, 129, 235);
  border: 1px none;
  margin-left: 10px;
  border-radius: 10px;
  padding: 3px 10px;
  color: white;
`;
