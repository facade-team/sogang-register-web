import styled, { css } from 'styled-components';
import Select from 'react-select';

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  min-width: 600px;
  min-height: 300px;

  @media screen and (max-width: 900px) {
    min-width: 400px;
  }
  @media screen and (max-width: 600px) {
    min-width: 200px;
    display: inline-block;
  }
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
  @media screen and (max-width: 900px) {
    //width: 40%;
    //min-width: 200px;
  }
  @media screen and (max-width: 600px) {
    position: relative;
    top: 25%;
    left: 0%;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  min-width: 400px;

  @media screen and (max-width: 600px) {
    width: 100%;
    min-width: 200px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    font-size: 10px;
    width: 100%;
  }
`;

export const SelectForm = styled(Select)`
  width: 80%;
  font-size: 16px;
  outline: none;
  transition: all 0.4s ease;
  z-index: 2;

  @media screen and (max-width: 805px) {
    //width: 80%;
    //font-size: 8px;
  }
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

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
  @media screen and (max-width: 600px) {
    font-size: 10px;
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
  @media screen and (max-width: 805px) {
    //width: 80%;
    //font-size: 8px;
  }
`;

export const MailAllow = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`;
