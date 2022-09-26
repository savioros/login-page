import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../context/AuthProvider/useAuth'

function PrivateRoutes() {
    const user = useAuth()

    return user.email ? <Outlet/> : <Navigate to={'/'}/>
}

export default PrivateRoutes