import styled from 'styled-components';
import { BsFillTrashFill } from 'react-icons/bs';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  //changed
  width: 50%;
  //min-width: 600px;
  min-height: 400px;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const OptionBtnContainer = styled.div`
  width: 100%;
  position: relative;
  top: -36px;
  display: flex;
  flex-direction: row;
`;

export const StackContent = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 80%;
  height: 80%;
  min-width: 250px;
  max-width: 450px;
  max-height: 600px;
  min-height: 300px;
  border-radius: 15px 15px 15px 15px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 6px 3px rgba(0, 0, 0, 0.34);

  margin-right: 20px;
  margin-left: 20px;

  @media screen and (max-width: 600px) {
    min-width: 200px;
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

export const TrashBtn = styled(BsFillTrashFill)`
  &:hover {
    cursor: pointer;
    transform: scale(1.05) translateZ(0px);
    transition: all 0.1s ease-in;
  }
`;

export const TooltipContainer = styled.div`
  position: absolute;
  top: 12px;
  right: 30px;
`;
