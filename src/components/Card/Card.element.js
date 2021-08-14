import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 210px; */
  width: 22%;
  min-width: 210px;
  height: 130px;
  background-color: #efecf8;
  border-radius: 8px;
  margin: 12px 8px;
  padding: 20px 14px 20px 21px;
  color: #61527f;
  font-weight: 800;
  letter-spacing: 0.3px;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  &:hover {
    transition: all 0.2s ease-out;
    /* box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2); */
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    top: -4px;
  }

  @media screen and (max-width: 600px) {
    min-width: 300px;
    height: 150px;
    // padding: 20px 14px 15px 20px;
  }
  @media screen and (max-width: 900px) {
    min-width: 300px;
    height: 150px;
    // padding: 20px 14px 15px 20px;
  }
`;

export const SubjectName = styled.p`
  width: 100%;
  font-size: 18px;
  word-wrap: break-word;
  ${({ text }) => text.length > 10 && `font-size: 16px; letter-spacing:0.01px;`}
  @media screen and (max-width: 600px) {
    ${({ text }) =>
      text.length > 10 && `font-size: 14px; letter-spacing:0.01px;`}
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    margin-bottom: 2px;
  }
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
  ${({ credit }) => credit === 1 && `background: #60a3bc;`}
  ${({ credit }) => credit === 2 && `background: #eccc68;`}
  ${({ credit }) => credit === 3 && `background: #ff6b81;`}
  ${({ bgColor }) => bgColor && `background: ${bgColor};`}

  // font-size
  ${({ fontSize }) => fontSize && `font-size: ${fontSize}px;`}
  @media screen and (max-width: 600px) {
    margin-bottom: 3px;
    font-size: 12px;
  }
`;

export const Detail = styled.div`
  font-size: 16px;
`;

export const P = styled.p`
  font-size: 14px;
  ${({ text }) => text.length > 10 && `font-size: 10px;`}
  margin-bottom: 8px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
