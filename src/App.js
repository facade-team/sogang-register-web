import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import Modal from './components/Modal/Modal'
import SignBtn from './components/SignBtn'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')

  const openModal = (signBtnType) => {
    console.log(signBtnType)
    setShowModal((prev) => !prev)
    setModalType(signBtnType)
  }
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container>
        <SignBtn onClick={openModal} signBtnType={'login'}></SignBtn>
        <SignBtn onClick={openModal} signBtnType={'signup'}></SignBtn>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalType={modalType}
          setModalType={setModalType}
        ></Modal>
      </Container>
    </>
  )
}

export default App
