import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai/';

export const Subject = styled.div`
  margin-left: 10px;
  background-color: #efecf8;
  border-radius: 8px;
  margin: 5px 8px 5px 3px;
  padding: 10px 7px 10px 10px;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 4px rgba(38, 38, 38, 0.2);
    top: -4px;
  }

  /* &:hover:after {
    content: 'X';
    position: relative;
    top: -45px;
    float: right;
  } */
`;

export const SubjectNameInList = styled.div`
  color: #61547f;
  width: 100%;
  font-size: ${({ font }) => `${font}px`};
  text-align: left;
  height: fit-content;
  margin-bottom: 8px;
  font-weight: 600;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

export const Detail = styled.div`
  font-size: 6px;
  margin-top: 8px;
`;

export const P = styled.p`
  ${({ text }) => {
    if (text) {
      return text.length > 20 && `font-size: 11px; letter-spacing:0.01px;`;
    }
  }}
  margin-bottom: 4px;
  margin-top: 4px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
`;

export const TimeText = styled.p`
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;

export const CloseBtn = styled(AiOutlineClose)`
  content: 'X';
  &:hover {
    cursor: pointer;
    transform: translateX(1.05);
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  top: -45px;
  float: right;
`;
