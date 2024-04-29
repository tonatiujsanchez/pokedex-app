import { useSelector } from 'react-redux'
import { PokemonFilter, PokemonList } from '../components'
import './styles/pokedexPage.css'

export const PokedexPage = () => {

    const trainer = useSelector( ( state ) => state.trainer )

    return (
        <main>
            <header className="pokedex-header container">
                <p className="pokedex-header__title"><span>Bienvenido { trainer.name }</span>, aquí podrás encontrar tu pokemón favorito</p>
                <PokemonFilter />
                <PokemonList />
            </header>
          
        </main>
    )
}
