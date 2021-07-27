import styled, { css } from 'styled-components';

export const DetailbarComponent = styled.div`
  position: relative;
  top: 0;
  display: ${({ widthPx }) => (widthPx === 0 ? 'none' : 'block')};
  right: ${({ widthPx }) => `${widthPx - 350}px`};
  min-width: 350px;
  height: 100vh;
  background-color: #f6faff;
`;

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailbarContent = styled.div`
  background-color: #ffffff;
  position: relative;
  top: 100px;
  width: 80%;
  height: 350px;
  min-height: 350px;
  border-radius: 15px 15px 15px 15px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.34);
`;

export const StackContent = styled.div`
  background-color: #ffffff;
  position: relative;
  top: 150px;
  width: 80%;
  height: 380px;
  min-height: 380px;
  border-radius: 15px 15px 15px 15px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.34);
`;

export const SubjectName = styled.div`
  color: #61547f;
  width: 100%;
  font-size: ${({ font }) => `${font}px`};
  font-weight: 600;
  text-align: left;
  height: fit-content;
  margin-top: 8px;
`;

export const SubjectTable = styled.table`
  border-collapse: collapse;
  height: auto;
  font-size: 14px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHead = styled.th`
  text-align: left;
  padding-left: 5px;
  color: #6a31df;
  width: 80px;
  border-right: 1px solid #f2f2f2;
  border-bottom: ${({ corner }) => !corner && `1px solid #f2f2f2;`};
`;

export const TableData = styled.td`
  padding: 5px;
  width: 160px;
  border-left: 1px solid #f2f2f2;
  border-bottom: ${({ corner }) => !corner && `1px solid #f2f2f2;`};
`;

export const FavoriteBtn = styled.div`
  position: absolute;
  left: 80%;
  top: 0px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const OptionBtnContainer = styled.div`
  width: 100%;
  position: relative;
  top: -36px;
  left: -8px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  &::nth-child(1) {
    margin-right: 10px;
  }
`;

export const SubejctList = styled.ul`
  position: relative;
  top: -10px;
  list-style: none;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 7px;
    background-clip: content-box;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #a481eb;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f2f2f2;
    border-radius: 10px;
    width: 1px;
  }
`;

export const Subject = styled.li`
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
`;

export const SubjectNameInList = styled.div`
  color: #61547f;
  width: 100%;
  font-size: ${({ font }) => `${font}px`};
  text-align: left;
  height: fit-content;
  margin-bottom: 8px;
  font-weight: 600;
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
`;

export const Divider = styled.hr`
  border-top: 2px solid #bfbfbf;
  margin-right: 6px;
  margin-left: 6px;
`;
