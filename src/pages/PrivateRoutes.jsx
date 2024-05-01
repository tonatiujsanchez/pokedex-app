import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import './styles/privateRoutes.css'
import { ThemeButton } from '../components'

export const PrivateRoutes = () => {
    
    const trainer = useSelector( ( state ) => state.trainer )

    if ( trainer.name ) {        
        return (
            <>
                <div className="pokedex__head">
                    <div className="pokedex__head-red"></div>
                    <div className="pokedex__head-black"></div>
            
                    <div className="container pokedex__container">
                        <figure className="pokedex__figure-title">
                            <img 
                                src="/pokedex-logo.webp" 
                                alt="Pokedex título"
                                title="Pokedex título"
                            />
                        </figure>
                        <figure className="pokedex__head-figure">
                            <img
                                src="/pokedex-circle.webp"
                                alt="Pokedex circle"
                                title="Pokedex circle"
                            />
                        </figure>
                    </div>
                </div>
                <Outlet />
                <div className="pokedex__theme-button">
                    <ThemeButton />
                </div>
            </>
        )
    }

    return <Navigate to={'/'} />

}
