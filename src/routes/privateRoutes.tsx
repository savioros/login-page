import { Outlet } from 'react-router-dom'
import { getUserLocalStorage } from '../context/AuthProvider/util'
import NoAcess from '../pages/NoAcess'

function PrivateRoutes() {
    const auth = getUserLocalStorage()

    if(!auth?.email){
        return <NoAcess/>
    }

    return <Outlet/>
}

export default PrivateRoutes