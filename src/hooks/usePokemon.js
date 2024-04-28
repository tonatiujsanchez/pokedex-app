import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setAllPokemons, setPokemons, setHasError, setIsLoading, setTypes, setIsLoadingTypes, setHasErrorTypes, setTypeSelected, setPokemonsByType, setPage } from '../store/slices/pokemon.slice'
import { useEffect } from 'react'
import { getPokemonsPerPage } from '../services'

export const usePokemons = () => {
    
    const dispath = useDispatch()
    const {
        allPokemons,
        pokemonsByType,
        pokemons, 
        isLoading, 
        hasError, 
        types, 
        isLoadingTypes, 
        hasErrorTypes, 
        typeSelectedUrl,
        page,
        pageSize,
    } = useSelector(( store => store.pokemon ))

    useEffect(() => {
        getPokemons()
    },[])

    useEffect(()=>{
        if( typeSelectedUrl ){
            getPokemonsByType()
        }
    },[typeSelectedUrl])


    useEffect(() => {

        let pokemons = {}
        if( pokemonsByType.length > 0 ){
            pokemons = {
                count      : pokemonsByType.length,
                currentPage: page,
                totalPages : Math.ceil( pokemonsByType.length / Number(pageSize) ),
                data: getPokemonsPerPage( pokemonsByType, page, pageSize )
            }
        }else {
            pokemons = {
                count      : allPokemons.length,
                currentPage: page,
                totalPages : Math.ceil( allPokemons.length / Number(pageSize) ),
                data: getPokemonsPerPage( allPokemons, page, pageSize )
            }
        }

        dispath( setPokemons(pokemons ))

    },[ allPokemons, pokemonsByType, page, pageSize])

    const getPokemons = async() => {
        dispath( setIsLoading(true) )
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=1302`
            const { data:pokemonUrls } = await axios.get( url )

            dispath( setAllPokemons(pokemonUrls.results) )
            dispath( setHasError(null) )
            
        } catch (error) {
            dispath( setHasError(error.response.data) )  
        }finally {
            dispath( setIsLoading( false ) )
        }
    }


    const getPokemonsByType = async() => {
        dispath( setIsLoading( true ) )
        try {
            const { data } = await axios.get( typeSelectedUrl )
            const pokemonUrls = data.pokemon.map( poke => poke.pokemon )

            dispath( setPokemonsByType(pokemonUrls) )
            dispath( setHasError(null) )

        } catch (error) {
            dispath( setHasError(error.response.data) )  
        }finally {
            dispath( setIsLoading( false ) )
        }
    }

    const getTypes = async() => {
        dispath( setIsLoadingTypes(true) )
        try {
            const url = `https://pokeapi.co/api/v2/type`
            const { data } = await axios.get(url)
            dispath( setTypes(data.results) )
        } catch(error) {
            dispath( setHasErrorTypes(error.response.data) ) 
        } finally {
            dispath( setIsLoadingTypes(false) )
        }
    }

    const onChangeType = (typeUrl) => {
        dispath( setTypeSelected(typeUrl) )
    }

    const onChangePage = ( pageSelected ) => {
        dispath( setPage(pageSelected) )
    }


    return { 
        pokemons,
        isLoading, 
        hasError, 
        getTypes, 
        types, 
        isLoadingTypes, 
        hasErrorTypes, 
        typeSelectedUrl, 
        onChangeType,
        onChangePage,
    }
}
