import styled from 'styled-components';

export const Bar = styled.nav`
  width: inherit;
  margin-top: 10px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BarContainer = styled.div`
  width: inherit;
  padding: 0px 30px 0px 90px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BarName = styled.span`
  font-size: 28px;
  font-weight: bold;
  justify-self: flex-start;
`;

export const BtnContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
