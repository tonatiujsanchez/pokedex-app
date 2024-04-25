import { Navigate, Outlet } from "react-router-dom"


export const PrivateRoutes = () => {
    
    const isPublic = true

    if ( isPublic ) {        
        return (
            <Outlet />
        )
    }

    return <Navigate to={'/'} />

}
