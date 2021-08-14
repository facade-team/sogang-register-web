import styled from 'styled-components';
import { GradationBtnComp } from '../GradationBtn/GradationBtn.element';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 40px 0px;
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

  input,
  textarea {
    padding: 12px 12px;
    width: 100%;
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
  width: ${({ widthPx }) => (widthPx ? `${widthPx}px` : `100%`)};
  max-width: 800px;
  margin: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: all 0.3s ease;
    z-index: 3;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
