import styled from 'styled-components';

export const ProfileContainer = styled.div`
  position: absolute;
  top: 1vh;
  right: 3vw;
  padding: 5px;
  width: 14vw;
  display: flex;

  &:hover {
    cursor: pointer;
    border-radius: 5% 5% 5% 5%;
    box-shadow: 0 4px 4px 0 rgba(182, 0, 4, 0.8);
  }
`;

export const ProfileIMG = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10%;
`;

export const NameMajorWrapper = styled.div`
  padding-left: 5%;
`;

export const Name = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Major = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;
