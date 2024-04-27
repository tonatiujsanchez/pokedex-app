import { usePokemons } from '../../hooks'
import { PokemonCard } from './PokemonCard'
import './styles/pokemonList.css'

export const PokemonList = () => {

    const { isLoading, hasError, pokemons } = usePokemons({ page: 1, pageSize: 16 })

    if( isLoading ){
        return (
            <h2>Cargando...</h2>
        )
    }

    if( hasError ){
        return (
            <h2>{ hasError }</h2>
        )
    }

    return (
        <section className="pokemon-list">
            {
                pokemons.data.map( pokemon =>(
                    <PokemonCard
                        key={ pokemon.id }
                        pokemon={ pokemon }
                    />
                ))
            }
        </section>
    )
}
