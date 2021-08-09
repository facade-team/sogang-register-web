import styled, { css } from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  ${({ type }) => {
    return css`
      padding: 12px 12px;
      width: 100%;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #c7c7c7;
      outline: none;
      transition: all 0.4s ease;

      &:focus-within {
        padding: 12px 12px;
        width: 100%;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid #7248db;
        outline: none;
        transition: all 0.4s ease;
      }
    `;
  }}
`;
