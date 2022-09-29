import { Outlet } from 'react-router-dom'
import { getUserLocalStorage } from '../context/AuthProvider/util'

function PrivateRoutes() {
    const auth = getUserLocalStorage()

    if(!auth?.email){
        return <h1>No Acess</h1>
    }

    return <Outlet/>
}

export default PrivateRoutes