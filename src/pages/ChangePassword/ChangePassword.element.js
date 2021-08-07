import styled, { css } from 'styled-components';

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-width: 600px;
  min-height: 300px;
`;

export const Input = styled.input`
  ${({ type }) => {
    return css`
      padding: 12px 12px;
      width: 70%;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #c7c7c7;
      outline: none;
      transition: all 0.4s ease;

      &:focus-within {
        padding: 12px 12px;
        width: 70%;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid #7248db;
        outline: none;
        transition: all 0.4s ease;
      }
    `;
  }}
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  min-height: 300px;
  max-height: 600px;
  min-width: 400px;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: inline-block;
  width: fit-content;
  white-space: nowrap;
  color: #666;
  font-size: 16px;
  margin-bottom: 5px;

  &:focus-within {
    color: #7248db;
    font-weight: 800;
    transition: all 0.4s ease;
  }
`;
