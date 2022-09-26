import React, { createContext, useEffect, useState } from 'react'
import { IAuthProvider, IContext, IUser } from './types'
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from './util'

export const AuthContext = createContext<IContext>({} as IContext)

export function AuthProvider({ children }: IAuthProvider) {
    const [user, setUser] = useState<IUser | null>()

    useEffect(() => {
        const user = getUserLocalStorage()

        if(user?.email) setUser(user)
    }, [])

    async function authenticate(email: string, password: string) {
        const response = await LoginRequest(email, password)

        const payload = {email, token: response.token}

        setUser(payload)
        setUserLocalStorage(payload)
    }

    function loggout(){
        setUser(null)
        setUserLocalStorage(null)
    }

    return (
        <AuthContext.Provider value={{...user, authenticate, loggout}}>
            {children}
        </AuthContext.Provider>   
    )
}