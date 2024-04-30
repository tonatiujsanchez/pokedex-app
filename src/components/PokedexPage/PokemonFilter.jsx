import { usePokemons } from '../../hooks'
import { InputForm } from '../Shared/InputForm'
import { SelectPageSize } from './SelectPageSize'
import { SelectType } from './SelectType'
import './styles/pokemonFilter.css'

export const PokemonFilter = () => {

    const { onChangeSearchTerm,  onChangePage } = usePokemons()
    
    const handleSearchPokemon = (value) => {
        onChangePage(1)
        onChangeSearchTerm(value.trim())
    }

    return (
        <section className="pokedex-filter">
            <InputForm 
                textButton="Buscar"
                placeholder="Buscar un pokemon"
                handleSubmit={ handleSearchPokemon }
            />
            <SelectType />
            <SelectPageSize />
        </section>
    )
}
