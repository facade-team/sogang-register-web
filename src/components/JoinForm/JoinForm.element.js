import styled from 'styled-components';

export const JoinFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px 40px;
  min-width: 500px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    width: 100%;
    min-width: 200px;
    padding-right: 0px;
    padding-left: 0px;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  max-width: 800px;
  font-weight: 600;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  label {
    display: block;
    color: #666;
    font-size: 16px;
    margin-bottom: 10px;
    transition: all 0.1s ease-in-out;
  }
  &:focus-within label {
    color: #7248db;
    font-weight: 800;
  }

  input {
    padding: 12px 12px;
    width: 100%;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #c7c7c7;
    outline: none;
    transition: 0.4s;
  }

  &:focus-within input {
    border-color: #7248db;
  }
`;

export const MailAllow = styled.p`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;

  & button {
    margin-left: 5px;
  }
`;

export const EmailCheckBtn = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: none;
  padding: 5px;
  background-color: ${({ bgColor }) => `${bgColor}`};
  color: white;
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export const Sup = styled.span`
  vertical-align: super;
  font-size: 7px;
  color: #ff7675;
`;
