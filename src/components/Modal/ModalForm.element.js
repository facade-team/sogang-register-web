import styled from 'styled-components';
import { GradationBtnComp } from '../GradationBtn/GradationBtn.element';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  color: #666;
`;

export const FormGroup = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 15px;

  label {
    display: block;
    color: #666;
    font-size: 16px;
    margin-bottom: 5px;
  }
  &:focus-within label {
    color: #7248db;
    font-weight: 800;
    transition: all 0.4s ease;
  }

  input {
    padding: 12px 12px;
    width: 100%;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #c7c7c7;
    outline: none;
    transition: all 0.4s ease;
  }

  &:focus-within input {
    border-color: #7248db;
  }
`;

export const CustomGradationBtnComp = styled(GradationBtnComp)`
  position: inherit;
  font-weight: 800;
  font-size: 16px;
  width: 80%;
  margin: 0;
  border-radius: 12px;
  border: none;
  margin-top: 15px;

  &:hover {
    cursor: pointer;
    transform: scale(1.02) translateZ(0px);
    transition: all 0.1s ease-in;
  }

  & + div {
    text-align: center;
    margin-top: 24px;
    text-decoration: underline;
    font-size: 14px;
    span {
      cursor: pointer;
    }
  }
`;

export const Seperator = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;

  p {
    padding: 0 15px;
    color: #c7c7c7;
  }

  div {
    flex: 1;
    height: 1px;
    background-color: #c7c7c7;
  }
`;

export const MailAllow = styled.p`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`;
