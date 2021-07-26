import styled, { css } from 'styled-components';

export const SidebarComponent = styled.div`
  position: absolute;
  left: 0%;
  text-align: center;
  top: 0%;
  height: 100%;
  width: ${(props) => `${-props.widthPx}px`};
  border-radius: 0px 10px 10px 0px;
  background-color: rgb(106, 49, 223, 0.9);
  transition: 0.8s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainLogo = styled.img`
  width: 1.8rem;
  height: 1.2rem;
  margin-right: 15px;
`;

export const Sogang = styled.span`
  color: #b89af5;
`;

export const Register = styled.span`
  color: #ffffff;
  /* display: ${({ toggleOpen }) => (toggleOpen ? 'inline-block' : 'none')}; */
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: inherit;
`;

export const ServiceName = styled.div`
  position: relative;
  top: 4vh;
  font-size: 1.5rem;
  font-weight: 800;
  color: #b60004;
`;

export const NavigationList = styled.div`
  position: relative;
  top: 25vh;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;

  &:nth-child(${(props) => props.active}) {
    font-weight: 700;
    color: rgba(182, 0, 4, 1);
  }
`;

export const Navigation = styled.div`
  color: #bfbfbf;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 0px;
`;

export const Icon = styled.div`
  margin-right: 15px;
`;
