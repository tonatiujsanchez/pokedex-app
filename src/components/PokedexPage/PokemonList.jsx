import { usePokemons } from '../../hooks'
import { Pagination } from './Pagination'
import { PokemonCard } from './PokemonCard'
import { PokeLoading } from '../Shared/PokeLoading'

import './styles/pokemonList.css'

export const PokemonList = () => {

    const { isLoading, hasError, pokemons, onChangePage } = usePokemons()

    if( isLoading ){
        return (
            <div className="pokemon-list__loader">
                <PokeLoading />
            </div>
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
