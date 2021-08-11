import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleComp = styled.p`
  font-size: 24px;
  font-weight: 700;
  color: #61527f;

  @media screen and (max-width: 805px){
    //font-size: 16px;
  }
`;
