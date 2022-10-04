import React from 'react'
import LoginForm from '../../components/LoginForm'
import { Container, Content, Notification } from './styles'
import useAuth from '../../context/AuthProvider/useAuth'
import Info from '../../components/Info'

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
      <Info>
        Due to API limitation, use in email field 
        "eve.holt@reqres.in" and password field 
        "cityslicka" to test the app
      </Info>
    </Container>
  )
}

export default Login