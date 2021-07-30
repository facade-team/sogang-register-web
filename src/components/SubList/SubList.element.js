import styled, { css } from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 100%;
  background-color: transparent;
  align-items: center;
`;

export const OptionContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 15px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  place-self: flex-start;
  // font-size: 20px;
  position: relative;
  left: 0px; // 세부옵션 버튼 아래 나오도록 가능?
`;

export const ListContainer = styled.div`
  display: flex;
  width: 140px;
  height: 40px;
  align-items: center; // 세로
  justify-content: start; // 가로
  background-color: transparent;
  margin-right: -40px; // 겹침
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
  width: 100%;
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
