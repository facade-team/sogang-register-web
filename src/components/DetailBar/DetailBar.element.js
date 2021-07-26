import styled, { css } from 'styled-components';

export const DetailbarComponent = styled.div`
  min-width: 350px;
  width: ${({ widthPx }) => `${widthPx}px`};
  background-color: #f6faff;
`;

export const DetailContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const DetailbarContent = styled.div`
  background-color: #ffffff;
  width: 80%;
  height: 35%;
  border-radius: 15px 15px 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.34);
`;

export const SubjectName = styled.div`
  font-size: 1.5rem;
`;

export const SubjectTable = styled.table`
  border-collapse: collapse;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr``;

export const TableHead = styled.th`
  width: 80px;
  border-right: 1px solid #f2f2f2;
  border-bottom: ${({ corner }) => !corner && `1px solid #f2f2f2;`};
`;

export const TableData = styled.td`
  width: 160px;
  border-left: 1px solid #f2f2f2;
  border-bottom: ${({ corner }) => !corner && `1px solid #f2f2f2;`};
`;
