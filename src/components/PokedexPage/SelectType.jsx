
import { useEffect } from 'react'
import './styles/SelectType.css'
import { usePokemons } from '../../hooks'

export const SelectType = () => {

    const {getTypes, types, isLoadingTypes, hasErrorTypes, typeSelectedUrl, onChangeType } = usePokemons()

    useEffect(()=>{
        getTypes()
    },[])

    if( isLoadingTypes ){
        return (
            <p>Cargando typos...</p>
        )
    }

    if ( hasErrorTypes ) {
        return(
            <h3>{ hasErrorTypes }</h3>
        )
    }

    return (
        <select
            className="filter-select"
            onChange={({ target }) => onChangeType(target.value) }
            value={ typeSelectedUrl }
        >
            <option value="">Todos los pokemones</option>
            {
                types.map( type => (
                    <option key={ type.url } value={ type.url }>{ type.name }</option>
                ))
            }
        </select>
    )
}
