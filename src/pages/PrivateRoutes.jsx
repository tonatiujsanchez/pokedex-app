import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'


export const PrivateRoutes = () => {
    
    const trainer = useSelector( ( state ) => state.trainer )

    if ( trainer.name ) {        
        return (
            <Outlet />
        )
    }

    return <Navigate to={'/'} />

}
