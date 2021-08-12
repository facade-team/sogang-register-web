import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarComponent = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  height: ${(props) => {
    if (props.toggleOpen === true) {
      return `${props.heightPx}px`;
    } else {
      return `60px`;
    }
  }};
  background-color: #7b45e9;
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: unset;
  z-index: ${(props) => {
    if (props.toggleOpen === true) {
      return `2`;
    } else {
      return `2`;
    }
  }};
`;

export const MainLogo = styled.img`
  width: 1.8rem;
  height: 1.2rem;
  margin-right: 15px;
`;

export const Sogang = styled.span`
  /* position: fixed; */
  color: #b89af5;
`;

export const Register = styled.span`
  /* position: fixed; */
  color: #ffffff;
`;

export const SidebarContent = styled.div`
  /* position: fixed; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;
  height: inherit;
`;

export const ServiceName = styled.div`
  position: inherit;
  top: 20px;
  left: 25px;
  font-size: 1.5rem;
  font-weight: 800;

  &:hover {
    transform: scale(1.05);
  }
`;

export const NavigationList = styled.div`
  position: relative;
  top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

export const Navigation = styled.div`
  position: relative;
  color: #bfbfbf;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 10px 0px;
  margin-bottom: 20px;
  font-weight: 500;
`;

export const Icon = styled.div`
  font-size: 30px;
  ${({ search }) =>
    search === 'search'
      ? `color: white;
    font-weight:800;
     
    `
      : null}
  ${({ mypage }) =>
    mypage === 'mypage' ? `color: white; font-weight:800;` : null}
  ${({ feedback }) =>
    feedback === 'feedback' ? `color: white; font-weight:800;` : null}
`;

export const CustomLink = styled(Link)`
  display: flex;
  &:hover {
    color: white;
    font-weight: 700;
  }
`;

export const NavMenu = styled.span`
  margin-left: 16px;
  font-size: 24px;
  ${({ search }) => (search === 'search' ? `color: white;` : null)}
  ${({ mypage }) => (mypage === 'mypage' ? `color: white;` : null)}
  ${({ feedback }) => (feedback === 'feedback' ? `color: white;` : null)}
`;
