import React from 'react'
import RegisterForm from '../../components/RegisterForm'
import { Container, Content } from './styles'

function Register() {
    return (
        <Container>
            <Content>
            <h1>Sign up</h1>
            <p>Sign up and start managing your candidates!</p>
            <RegisterForm/>
        </Content>
        </Container>
    )
}

export default Register