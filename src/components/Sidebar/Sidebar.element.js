import styled from 'styled-components';

export const SidebarComponent = styled.div`
  position: absolute;
  left: ${(props) => (props.toggleOpen ? `${-props.widthVW}vw` : 0)};
  text-align: center;
  top: 0%;
  height: 100%;
  width: 15vw;
  border-right: 1px solid;
  border-radius: 0;
  border-color: rgba(62, 194, 133, 0.693);
  background-color: rgb(255, 255, 255);
  transform: ${(props) => `translatex(${props.widthVW}vw)`};
  transition: 0.8s ease;
  z-index: 1;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceName = styled.div`
  position: relative;
  top: 5vh;
  font-size: 2rem;
  font-weight: 800;
  color: #b60004;
`;

export const NavigationList = styled.div`
  position: relative;
  top: 20vh;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:nth-child(${(props) => props.active}) {
    font-weight: 700;
    color: rgba(182, 0, 4, 1);
  }
`;

export const Navigation = styled.div``;
