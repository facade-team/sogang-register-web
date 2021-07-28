import styled from 'styled-components';

export const DetailbarComponent = styled.div`
  position: absolute;
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
  text-align: left;
  height: fit-content;
`;

export const SubjectTable = styled.table`
  border-collapse: collapse;
  height: auto;
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
