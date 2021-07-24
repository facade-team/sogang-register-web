import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const OpenModalBtn = styled(motion.button)`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background-color: #b60004;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`

const SignBtn = ({ onClick, signBtnType }) => {
  return (
    <OpenModalBtn
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(signBtnType)}
    >
      {signBtnType === 'login' ? '로그인' : '회원가입'}
    </OpenModalBtn>
  )
}

export default SignBtn
