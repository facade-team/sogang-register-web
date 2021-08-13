import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { motion } from 'framer-motion';

export const Background = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled(motion.div)`
  min-width: 400px;
  height: fit-content;
  padding-bottom: 30px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.3);
  background: #fff;
  display: grid;
  grid-template-rows: 1fr 4fr;
  position: relative;
  z-index: 10;
  border-radius: 16px;

  @media screen and (max-width: 600px) {
    min-width: 280px;
  }
`;

export const ModalLogo = styled.div`
  margin-top: ${({ modalType }) => (modalType === 'login' ? `40px` : `20px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
`;

export const LogoImg = styled.img`
  width: 2.7rem;
  height: 1.8rem;
  margin-right: 15px;
`;

export const LogoText1 = styled.span`
  font-size: 20px;
  color: #9c6af1;
`;

export const LogoText2 = styled.span`
  font-size: 20px;
  color: #4600a3;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ modalType }) => (modalType === 'login' ? `40px` : `10px`)};
  align-items: center;
  line-height: 1.8;
`;

export const ModalCloseBtn = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 32px;
  height: 32px;
  padding: 0;
  color: black;
`;

export const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
};
