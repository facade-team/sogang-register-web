import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardList = styled.div`
  display: flex;
  min-height: 200px;
  max-height: 800px;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-y: auto;

  &::-webkit-scrollbar {
    cursor: pointer;
    width: 8px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: #9f82e4;
    background-clip: padding-box;
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-track {
    cursor: pointer;
    background-color: #f5f5f5;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SortedSubjectContainer = styled.div`
  display: flex;
  width: 100%;

  flex-wrap: wrap;
  flex-direction: column;
`;

export const ProfName = styled.div`
  padding: 8px;
  color: #61527f;
  font-size: 16px;
  font-weight: 600;
  background-color: #ecf0f1;
  width: fit-content;
  border-radius: 4px;
`;

export const SortedCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 2px solid #bfbfbf;
  border-radius: 8px;
  margin-right: 6px;
  margin-left: 6px;
`;
