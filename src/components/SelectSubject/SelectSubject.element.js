import styled from 'styled-components';

export const Container = styled.div`
  /*  */
`;

export const CardList = styled.div`
  display: flex;
  min-height: 160px;
  flex-direction: row;
  flex-wrap: wrap;
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
