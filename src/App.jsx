import { Route, Routes } from 'react-router-dom'
import { HomePage, PokedexPage, PokemonPage, PrivateRoutes } from './pages'
import './App.css'



function App() {
    return (
        <>       
           <Routes>
                <Route path='/' element={<HomePage />} />
                <Route element={ <PrivateRoutes /> } >
                    <Route path='/pokedex' element={<PokedexPage />} />
                    <Route path='/pokedex/:id' element={<PokemonPage />} />
                </Route> 
            </Routes>
        </>
    )
}

export default App
