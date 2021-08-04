import styled, { css } from 'styled-components';

export const CheckContainer = styled.div`
  display: flex;
  width: 100%;
  justify-contents: center;
  align-items: center;
  place-self: flex-start;
  margin-left: 5px;
  margin-top: 5px;
`;

export const SubContainer = styled.span`
  width: 100px;
  margin-bottom: 5px;
`;

export const ChkBox = styled.input`
  width: 15px;
  height: 15px;
`;

export const ChkLabel = styled.label`
  ${(props) =>
    props.checked === -1 &&
    css`
      color: gray;
    `};
  ${(props) =>
    props.checked !== -1 &&
    css`
      color: #6a31df;
    `};
`;
