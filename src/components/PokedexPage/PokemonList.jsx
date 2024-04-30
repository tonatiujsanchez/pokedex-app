import { usePokemons } from '../../hooks'
import { Pagination } from './Pagination'
import { PokemonCard } from './PokemonCard'
import { PokeLoading } from '../Shared/PokeLoading'
import { typesEs } from '../../constants'
import './styles/pokemonList.css'
import { AlertIcon } from '../Icons'

export const PokemonList = () => {

    const { isLoading, hasError, pokemons, onChangePage, searchTerm, typeSelectedUrl, types, onChangeHasError } = usePokemons()

    if( isLoading ){
        return (
            <div className="pokemon-list__loader">
                <PokeLoading />
            </div>
        )
    }

    if( hasError ){
        return (
            <div className="has-error">
                <AlertIcon />
                <h2>{ hasError }</h2>
            </div>
        )
    }

    if( pokemons.data.length === 0 ){

        const typeSelected = types.find( type => type.url === typeSelectedUrl )
        return (
            <div className="without-results">
                <figure className="without-results__figure">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif" alt="Charizard" />
                </figure>
                <h2>
                    No se encontraron pokemones 
                    { searchTerm.trim().length > 0 && <> con el termino <span className="without-results__search-term">{ searchTerm }</span> </> }
                    { typeSelectedUrl.trim().length > 0 && <> de tipo <span className="without-results__type">{typesEs[typeSelected.name]}</span></> }
                </h2>
            </div>
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
                            onChangeHasError={ onChangeHasError }
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
