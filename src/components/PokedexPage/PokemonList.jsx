import { usePokemons } from '../../hooks'
import { Pagination } from './Pagination'
import { PokemonCard } from './PokemonCard'
import './styles/pokemonList.css'

export const PokemonList = () => {

    const { isLoading, hasError, pokemons, onChangePage } = usePokemons()

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
        <>
            <section className="pokemon-list">
                {
                    pokemons.data.map( pokemon =>(
                        <PokemonCard
                            key={ pokemon.url }
                            pokemonUrl={ pokemon.url }
                        />
                    ))
                }
            </section>
            {
                pokemons.totalPages > 1 && (

                    <Pagination
                        totalPages={ pokemons.totalPages }
                        currentPage={ pokemons.currentPage }
                        handlePage={ onChangePage }
                    />
                )
            }
        </>
    )
}
