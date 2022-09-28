import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PrivateRoutes from './privateRoutes'

function PublicRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<PrivateRoutes/>}>
                <Route path='' element={<Home/>}/>
            </Route>
        </Routes>
    )
}

export default PublicRoutes