import { InputForm } from '../Shared/InputForm'
import { SelectType } from './SelectType'
import './styles/pokemonFilter.css'

export const PokemonFilter = () => {
    
    const handleSearchPokemon = (value) => {
        if ( value === '' ) {
            return console.log('Ingresa tu nombre para comenzar')
        }

        console.log(value)
    }

    return (
        <section className="pokedex-filter">
            <InputForm 
                placeholder="Buscar un pokemon"
                handleSubmit={ handleSearchPokemon }
            />
            <SelectType />
        </section>
    )
}
