import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45%;
  width: 90%;
  min-height: 300px;
`;

export const Profile = styled.div`
  width: 50%;
  min-width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.div``;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  font-weight: 600;
  color: #61527f;
  margin-left: 20px;
`;

export const Name = styled.p`
  margin-bottom: 8px;
`;

export const Major = styled.p`
  font-size: 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  min-width: 420px;
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

export const Select = styled.select`
  padding: 12px 12px;
  width: 80%;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #c7c7c7;
  outline: none;
  transition: all 0.4s ease;
`;

export const Option = styled.option`
  font-size: 14px;
  background-color: #ffffff;
  &:focus-width {
    border: 1px solid #7248db;
  }
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

export const Input = styled.input`
  ${({ type }) => {
    if (type === 'email') {
      return css`
        padding: 12px 12px;
        width: 80%;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid #c7c7c7;
        outline: none;
        transition: all 0.4s ease;

        &:focus-within {
          padding: 12px 12px;
          width: 80%;
          font-size: 16px;
          border-radius: 4px;
          border: 1px solid #7248db;
          outline: none;
          transition: all 0.4s ease;
        }
      `;
    } else if (type === 'checkbox') {
      return css`
        width: 20px;
      `;
    }
  }}
`;

export const MailAllow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`;
