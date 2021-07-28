import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  min-width: 240px;
  height: 140px;
  background-color: #efecf8;

  border-radius: 8px;
  margin: 5px 3px 5px 3px;
  padding: 20px 14px 20px 21px;
  color: #61527f;
  font-weight: 800;
  letter-spacing: 0.3px;

  &:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
  }
`;

export const SubjectName = styled.p`
  font-size: 18px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Tag = styled.div`
  width: fit-content;
  padding: 4px 10px;
  margin-right: 4px;
  border: none;
  font-weight: 800;
  color: white;
  border-radius: 8px;
  font-size: 10px;
  ${({ untact }) => untact && `background: #0B099B;`}
  ${({ ontact }) => ontact && `background: #ED6E69;`}
  ${({ eng }) => eng && `background: #60B9CB;`}
  ${({ china }) => china && `background: #7936E2;`}
`;

export const Detail = styled.div`
  font-size: 14px;
`;

export const P = styled.p`
  ${({ text }) => text.length > 20 && `font-size: 11px; letter-spacing:0.01px;`}
  margin-bottom: 8px;
`;
