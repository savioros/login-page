import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRoutes from './privateRoutes'

function PublicRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<PrivateRoutes/>}>
                <Route path='' element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default PublicRoutes