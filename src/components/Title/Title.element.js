import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  @media screen and (max-width: 900px) {
  }
  @media screen and (max-width: 600px) {
  }
`;

export const TitleComp = styled.p`
  font-size: 27px;
  font-weight: 900;
  color: #61527f;

  @media screen and (max-width: 900px){
    font-size: 20px;
    font-weight: 800;
  @media screen and (max-width: 600px) {
    font-size: 16px;
    font-weight: 700;
    color: #61527f;
  }
`;
