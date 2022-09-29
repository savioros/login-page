import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IAuthProvider, IContext, IUser } from './types'
import { getUserLocalStorage, request, setUserLocalStorage } from './util'

export const AuthContext = createContext<IContext>({} as IContext)

export function AuthProvider({ children }: IAuthProvider) {
    const [user, setUser] = useState<IUser | null>()
    const [errorLogin, setErrorLogin] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const user = getUserLocalStorage()

        if(user?.email) setUser(user)
    }, [])

    async function authenticate(email: string, password: string) {
        const response = await request('login', email, password)
        
        const payload = {email, token: response?.token}
        
        if(email && response?.token) {
            setUser(payload)
            setUserLocalStorage(payload)
            navigate('/home')
        }else{
            setErrorLogin('Incorrect email or password')
            setTimeout(() => {
                setErrorLogin('')
            }, 4000)
        }
    }

    async function register(email: string, password: string) {
        const response = await request('register', email, password)
        
        const payload = {email, token: response?.token}
        
        if(email && response?.token) {
            setUser(payload)
            navigate('/')
        }
    }

    function loggout(){
        setUser(null)
        setUserLocalStorage(null)
    }

    return (
        <AuthContext.Provider value={{...user, errorLogin, authenticate, register, loggout}}>
            {children}
        </AuthContext.Provider>   
    )
}