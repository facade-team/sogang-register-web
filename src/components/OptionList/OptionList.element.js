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
  z-index: 2;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    z-index: 3;
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
      z-index: 2;
    `};
`;

export const ChkLabel = styled.label`
  color: gray;
`;

export const ScrollArea = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  box-shadow: 0px 3px 6px 2px rgba(0, 0, 0, 0.34);
  width: 120px;
  border: 2px solid #9387af;
  border-radius: 20px;
  font-size: 14px;

  z-index: 1;
  flex-direction: column;
  padding-top: 35px;
  align-items: center;
  max-height: 200px;
  left: ${(props) => {
    return `${-80 + 140 * props.number}px`;
  }};
  top: ${(props) => {
    return `${150 + 0 * props.section}px`;
  }};
`;

export const ScrollBarArea = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;

  &::-webkit-scrollbar {
    width: 7px;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a481eb;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 10px;
  }
`;

export const CheckContainer = styled.div`
  display: flex;
  width: 100%;
  justify-contents: center;
  align-items: center;
  place-self: flex-start;
  margin-left: 5px;
  margin-top: 5px;
`;

export const FoldBtn = styled.button`
  display: flex;
  color: gray;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 12px;
  background-color: white;
  border: none;
  border-radius: 20px;
  width: 90%;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
