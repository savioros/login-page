import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Container, Content, Notification } from './styles'
import useAuth from '../../context/AuthProvider/useAuth'

function Login() {
  const {errorLogin} = useAuth()

  return (
    <Container>
      {errorLogin ? <Notification>{errorLogin}</Notification> : ''}
      <Content>
        <h1>Sign in</h1>
        <p>Sign in and start managing your candidates!</p>
        <LoginForm/>
      </Content>
    </Container>
  )
}

export default Login