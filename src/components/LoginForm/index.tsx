import React, { FormEvent, useState } from 'react'
import Button from '../Button'
import InputForm from '../InputForm'
import { FormContainer, MoreOptions } from './styles'
import useAuth from '../../context/AuthProvider/useAuth'

function LoginForm() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const auth = useAuth()

  async function handleLogin(email: string, password: string){
    try {
      auth.authenticate(email, password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormContainer onSubmit={(e: FormEvent) => {
      e.preventDefault()
      handleLogin(emailValue, passwordValue)
    }}>
        <InputForm type='email' id='email' placeholder='email' value={emailValue} updateFunction={setEmailValue} />
        <InputForm type='password' id='password' placeholder='password' value={passwordValue} updateFunction={setPasswordValue} />
        <MoreOptions>
            <div>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#">Forgot password?</a>
        </MoreOptions>
        <Button name='Login'/>
    </FormContainer>
  )
}

export default LoginForm