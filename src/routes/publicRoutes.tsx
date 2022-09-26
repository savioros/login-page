import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import PrivateRoutes from './privateRoutes'

function PublicRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<PrivateRoutes/>}>
                    <Route path='' element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default PublicRoutes