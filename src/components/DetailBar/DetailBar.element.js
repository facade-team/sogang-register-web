import styled from 'styled-components';

export const DetailbarComponent = styled.div`
  position: relative;
  top: 0;
  display: ${({ widthPx }) => (widthPx === 0 ? 'none' : 'block')};
  right: ${({ widthPx }) => `${widthPx - 350}px`};
  min-width: 350px;
  height: ${(props) => {
    return `${props.heightPx}px`;
  }};
  background-color: #f6faff;

  overflow-y: hidden;
  scrollbar-width: none;
  &:hover {
    overflow-y: auto;
  }

  &::-webkit-scrollbar {
    display: none;
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

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const SubjectName = styled.div`
  color: #61547f;
  width: 100%;
  font-size: ${({ font }) => `${font}px`};
  font-weight: 600;
  text-align: left;
  height: fit-content;
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-right: 5px;
  width: 45px;
  justify-content: space-around;

  & > svg:first-child {
    margin-right: 5px;
  }
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
  /* color: #6a31df; */
  color: #656e79;
  font-weight: 900;

  width: 80px;
  padding: 5px;
  height: 24px;
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

export const SubjectList = styled.ul`
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

export const Divider = styled.hr`
  border-top: 2px solid #bfbfbf;
  margin-right: 6px;
  margin-left: 6px;
`;
