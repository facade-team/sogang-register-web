import React, { useRef, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import { motion, AnimatePresence } from 'framer-motion'
import LoginForm from './LoginForm'

const Background = styled(motion.div)`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalContainer = styled(motion.div)`
  min-width: 400px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: grid;
  grid-template-rows: 1fr 3fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

const ModalLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #b60004;
  color: white;
  font-size: 30px;
  border-radius: 10px 10px 0 0;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`

const ModalCloseBtn = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  color: white;
`

const modalVariant = {
  initial: { opacity: 0 },
  isOpen: { opacity: 1 },
  exit: { opacity: 0 },
}

const Modal = ({ showModal, setShowModal }) => {
  const BgRef = useRef()
  const closeModal = (e) => {
    if (BgRef.current === e.target) {
      setShowModal(false)
    }
  }
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false)
      }
    },
    [setShowModal, showModal]
  )

  useEffect(() => {
    document.addEventListener('keydown', keyPress)
    return () => {
      document.removeEventListener('keydown', keyPress)
    }
  }, [keyPress])

  const handleLogin = (user) => {
    console.log(user)
  }

  return (
    <AnimatePresence>
      {showModal && (
        <Background
          ref={BgRef}
          onClick={closeModal}
          initial={'initial'}
          animate={'isOpen'}
          exit={'exit'}
          variants={modalVariant}
        >
          <ModalContainer>
            <ModalLogo>서강신청 로고</ModalLogo>
            <ModalContent>
              <LoginForm handleLogin={handleLogin}></LoginForm>
            </ModalContent>
            <ModalCloseBtn
              onClick={() => setShowModal(!showModal)}
            ></ModalCloseBtn>
          </ModalContainer>
        </Background>
      )}
    </AnimatePresence>
  )
}

export default Modal
