import React, { FormEvent, useState } from 'react'
import useAuth from '../../context/AuthProvider/useAuth'
import Button from '../Button'
import InputForm from '../InputForm'
import { FormContainer } from './styles'

function RegisterForm() {
    const [emailValue, setEmailValue] = useState('')
    const [error, setError] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('')

    const auth = useAuth()

    async function handleRegister(email: string, password: string, confirmPassword: string){
        try {
            if(email && password === confirmPassword) 
                auth.register(email, password)
            else
            setError('Passwords are not the same')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <FormContainer onSubmit={(e: FormEvent) => {
            e.preventDefault()
            handleRegister(emailValue, passwordValue, confirmPasswordValue)
        }}>
            <InputForm type='email' id='email' placeholder='email' value={emailValue} updateFunction={setEmailValue} />
            <InputForm type='password' id='password' placeholder='password' value={passwordValue} updateFunction={setPasswordValue} />
            <InputForm type='password' id='confirmPassword' placeholder='confirm password' value={confirmPasswordValue} updateFunction={setConfirmPasswordValue} />
            {error ? <p>{error}</p> : ''}
            <Button name='Register'/>
        </FormContainer>
    )
}

export default RegisterForm