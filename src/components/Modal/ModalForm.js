import React, { useState } from 'react'
import styled from 'styled-components'
import useInput from '../../hooks/useInput'
import { motion } from 'framer-motion'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const Title = styled.p`
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;
  color: #666;
`

const FormGroup = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 15px;

  label {
    display: block;
    color: #666;
    font-size: 16px;
    margin-bottom: 5px;
    transition: 0.4s;
  }
  &:focus-within label {
    color: #b60004;
  }

  input {
    padding: 12px 12px;
    width: 100%;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #c7c7c7;
    outline: none;
    transition: 0.4s;
  }

  &:focus-within input {
    border-color: #b60004;
  }
`

const SubmitBtn = styled(motion.button).attrs({
  type: 'submit',
})`
  width: 100%;
  height: 45px;
  padding: 10px 15px;
  color: #fff;
  background-color: #b60004;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 15px;
  font-size: 16px;

  & + div {
    text-align: center;
    margin-top: 24px;
    text-decoration: underline;
    span {
      cursor: pointer;
    }
  }
`

const Seperator = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;

  p {
    padding: 0 15px;
    color: #c7c7c7;
  }

  div {
    flex: 1;
    height: 1px;
    background-color: #c7c7c7;
  }
`

const MailAllow = styled.p`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
`

const ModalForm = ({ handleLogin, modalType, setModalType }) => {
  const [user, onChangeInput] = useInput({
    name: '',
    email: '',
    password: '',
  })
  const { name, email, password } = user
  const passwordTest = ''
  const [checkboxValue, setCheckboxValue] = useState(true)
  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(user)
  }
  return (
    <FormContainer onSubmit={submitHandler}>
      {modalType === 'login' ? <Title>LOGIN</Title> : <Title>SIGN UP</Title>}
      {modalType === 'signup' && (
        <FormGroup>
          <label htmlFor="name">이름</label>
          <input
            type="name"
            name="name"
            value={name}
            onChange={onChangeInput}
          />
        </FormGroup>
      )}
      <FormGroup>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChangeInput}
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeInput}
        />
      </FormGroup>
      {modalType === 'signup' && (
        <FormGroup>
          <label htmlFor="password">비밀번호 재입력</label>
          <input
            type="password"
            name="passwordTest"
            value={passwordTest}
            onChange={onChangeInput}
          />
        </FormGroup>
      )}
      {modalType === 'login' ? (
        <>
          <SubmitBtn
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            로그인
          </SubmitBtn>
          <div>
            <span onClick={() => setModalType('signup')}>회원가입</span>
          </div>
          <Seperator>
            <div></div>
            <p>또는 간편로그인</p>
            <div></div>
          </Seperator>
        </>
      ) : (
        <>
          <MailAllow>
            <label for="allow" style={{ fontSize: '10px' }}>
              즐겨찾기한 교과목의 정보 업데이트 시 이메일 수신에 동의합니다.
            </label>
            <input
              type="checkbox"
              name="admit"
              id="allow"
              checked={checkboxValue}
              onChange={() => setCheckboxValue(!checkboxValue)}
            />
          </MailAllow>

          <SubmitBtn
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            회원가입
          </SubmitBtn>
        </>
      )}
    </FormContainer>
  )
}

export default ModalForm
