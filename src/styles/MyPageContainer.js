import styled from 'styled-components';

export const Box = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 900px){
    flex-direction: column;
    align-items: center;
  }
`;
