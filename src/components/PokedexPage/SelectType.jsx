
import { useEffect } from 'react'
import './styles/SelectType.css'
import { usePokemons } from '../../hooks'

export const SelectType = () => {

    const {getTypes, types, isLoadingTypes, hasErrorTypes, typeSelectedUrl, onChangeType, onChangePage } = usePokemons()

    useEffect(()=>{
        getTypes()
    },[])

    if( isLoadingTypes ){
        return (
            <div className="filter-select__skeleton"></div>
        )
    }

    if ( hasErrorTypes ) {
        return(
            <h3>{ hasErrorTypes }</h3>
        )
    }

    const handleChangeType = ( typeUrl ) => {
        onChangePage(1)
        onChangeType(typeUrl)
    }

    return (
        <select
            className="filter-select"
            onChange={({ target }) => handleChangeType(target.value) }
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
