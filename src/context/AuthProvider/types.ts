import { ReactNode } from "react"

export interface IUser {
    email?: string
    token?: string
}

export interface IContext extends IUser {
    errorLogin: string
    authenticate: (email: string, password: string) => Promise<void>
    register: (email: string, password: string) => Promise<void>
    loggout: () => void
}

export interface IAuthProvider {
    children: ReactNode
}