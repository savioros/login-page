import React from 'react'
import { AuthProvider } from './context/AuthProvider'
import Home from './pages/Home'
import Login from './pages/Login'
import PublicRoutes from './routes/publicRoutes'
import { GlobalStyles } from './styles/global'

function App() {
  return (
    <AuthProvider>
      <PublicRoutes/>
      <GlobalStyles/>
    </AuthProvider>
  )
}

export default App