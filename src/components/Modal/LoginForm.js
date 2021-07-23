import React from 'react'
import styled from 'styled-components'
import useInput from '../../hooks/useInput'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`

const FormGroup = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 15px;

  label {
    display: block;
    color: #666;
    font-size: 20px;
    margin-bottom: 5px;
  }

  input {
    appearance: none;
    background: none;
    border: none;
    outline: none;
    padding: 10px 0 10px 0;
    width: 100%;
    background-color: #f8f8f8;
    border-radius: 8px;
    border-width: 0;
  }
`

const SubmitBtn = styled.button.attrs({
  type: 'submit',
})``

const LoginForm = ({ handleLogin }) => {
  const [user, onChange] = useInput({
    email: '',
    password: '',
  })
  const { email, password } = user
  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(user)
  }
  return (
    <FormContainer onSubmit={submitHandler}>
      <FormGroup>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" value={email} onChange={onChange} />
      </FormGroup>
      <FormGroup>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
        />
      </FormGroup>
      <SubmitBtn>로그인</SubmitBtn>
    </FormContainer>
  )
}

export default LoginForm
