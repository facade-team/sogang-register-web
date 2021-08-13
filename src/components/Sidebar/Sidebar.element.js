import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarComponent = styled.div`
  position: absolute;
  left: 0%;
  text-align: center;
  /* height: 100%; */
  height: ${(props) => {
    return `${props.heightPx}px`;
  }};
  width: ${(props) => `${-props.widthPx}px`};
  border-radius: 0px 10px 10px 0px;
  background-color: rgba(106, 49, 223, 0.9);
  transition: 0.8s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MainLogo = styled.img`
  /* position: fixed; */
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
  height: 100%;
`;

export const ServiceName = styled.div`
  position: relative;
  top: 40px;
  font-size: 1.5rem;
  font-weight: 800;
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    transition: all 0.3s ease;
  }
`;

export const NavigationList = styled.div`
  position: relative;
  top: 200px;
  /* height: 20vh; */
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
  ${({ search }) =>
    search === 'search' ? `color: white; font-weight:800;` : null}
  ${({ mypage }) =>
    mypage === 'mypage' ? `color: white; font-weight:800;` : null}
  ${({ feedback }) =>
    feedback === 'feedback' ? `color: white; font-weight:800;` : null}
`;

export const CustomLink = styled(Link)`
  display: flex;
  transition: 0.3s;
  &:hover {
    color: white;
    font-weight: 800;
    transition: all 0.3s ease;
  }
`;

export const NavMenu = styled.span`
  margin-left: 40px;
  ${({ search }) =>
    search === 'search' ? `color: white; font-weight:800;` : null}
  ${({ mypage }) =>
    mypage === 'mypage' ? `color: white; font-weight:800;` : null}
  ${({ feedback }) =>
    feedback === 'feedback' ? `color: white; font-weight:800;` : null}
`;
