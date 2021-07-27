import styled, { css } from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  background-color: transparent;
  align-items: center;
`;

export const ListContainer = styled.div`
  display: flex;
  width: 140px;
  height: 40px;
  align-items: center; //세로
  justify-content: center; //가로
  background-color: transparent;
  margin-right: 20px;
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
  width: 100%;
  height: 100%;
  padding: 10px 1px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
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
    `};
`;
