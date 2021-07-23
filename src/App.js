import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import Modal from './components/Modal/Modal'
import LoginBtn from './components/LoginBtn'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal((prev) => !prev)
  }
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container>
        <LoginBtn onClick={openModal}></LoginBtn>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      </Container>
    </>
  )
}

export default App
