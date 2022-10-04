import React from 'react'
import Info from '../../components/Info'
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
            <Info>
                Due to API limitation, use in email field 
                "eve.holt@reqres.in" and password field 
                "pistol" to test the app
            </Info>
        </Container>
    )
}

export default Register