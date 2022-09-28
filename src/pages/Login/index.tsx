import React, { useState } from 'react'
import LoginForm from '../../components/LoginForm'
import { ButtonTheme, Container, Content } from './styles'
import { TbLamp, TbLampOff } from 'react-icons/tb'
import useAuth from '../../context/AuthProvider/useAuth'

function Login() {
  const [themeDark, setThemeDark] = useState(false)
  const auth = useAuth()

  return (
    <Container>
      {/* {auth.errorLogin ? <span>{auth.errorLogin}</span> : ''} */}
      <Content>
        <h1>Sign in</h1>
        <p>Sign in and start managing your candidates!</p>
        <LoginForm/>
      </Content>
      <ButtonTheme onClick={() => setThemeDark(!themeDark)} themeDark={themeDark}>
        {themeDark ? <TbLampOff size={25}/> : <TbLamp size={25} color='#fff'/>}
      </ButtonTheme>
    </Container>
  )
}

export default Login