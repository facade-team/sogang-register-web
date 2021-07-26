import styled from 'styled-components';
import { GradationBtnComp } from '../GradationBtn/GradationBtn.element';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 40px 40px 30px;
`;

export const FormGroup = styled.div`
  width: fit-content;
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

  input,
  textarea {
    padding: 12px 12px;
    width: 750px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #c7c7c7;
    outline: none;
    transition: 0.4s;
  }

  textarea {
    resize: none;
    height: 300px;
  }

  &:focus-within input,
  &:focus-within textarea {
    border-color: #7248db;
  }
`;

export const CustomGradationBtnComp = styled(GradationBtnComp)`
  position: inherit;
  font-weight: 800;
`;
