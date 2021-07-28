import styled from 'styled-components';

export const Subject = styled.li`
  margin-left: 10px;
`;

export const SubjectNameInList = styled.div`
  color: #61547f;
  width: 100%;
  font-size: ${({ font }) => `${font}px`};
  text-align: left;
  height: fit-content;
  margin-bottom: 4px;
`;

export const Detail = styled.div`
  font-size: 6px;
`;

export const P = styled.p`
  ${({ text }) => {
    if (text) {
      return text.length > 20 && `font-size: 11px; letter-spacing:0.01px;`;
    }
  }}
  margin-bottom: 4px;
  margin-top: 4px;
`;
