import { useSelector } from 'react-redux'
import { PokemonFilter, PokemonList } from '../components'
import './styles/pokedexPage.css'

export const PokedexPage = () => {

    const trainer = useSelector( ( state ) => state.trainer )

    return (
        <main>
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
            <header className="pokedex-header container">
                <p className="pokedex-header__title"><span>Bienvenido { trainer.name }</span>, aquí podrás encontrar tu pokemón favorito</p>
                <PokemonFilter />
                <PokemonList />
            </header>
          
        </main>
    )
}
