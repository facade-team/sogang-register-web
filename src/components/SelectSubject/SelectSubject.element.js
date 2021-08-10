import styled from 'styled-components';

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
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;
