import { useState } from 'react'

const useInput = (initialForm) => {
  const [form, setForm] = useState(initialForm)
  const onChange = (e) => {
    const newForm = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(newForm)
  }

  return [form, onChange]
}

export default useInput

/* 사용법

import React from 'react'
import useInput from './useInput'

const UseInputHook = () => {
  const [state, onChange] = useInput({
    nickname: '',
    age: 0,
  })
  const { nickname, age } = state
  return (
    <>
      <div>
        <input name="nickname" value={nickname} onChange={onChange} />
        <input name="age" value={age} onChange={onChange} />
      </div>
      <h6> 이름: {nickname}</h6>
      <h6> 나이: {age}</h6>
    </>
  )
}

export default UseInputHook

*/
