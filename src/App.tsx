import React from 'react'
import { AuthProvider } from './context/AuthProvider'
import Home from './pages/Home'
import Login from './pages/Login'
import PublicRoutes from './routes/publicRoutes'

function App() {
  return (
    <AuthProvider>
      <PublicRoutes/>
    </AuthProvider>
  )
}

export default App