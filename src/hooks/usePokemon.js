import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setAllPokemons, setPokemons, setHasError, setIsLoading, setTypes, setIsLoadingTypes, setHasErrorTypes, setTypeSelected, setPokemonsByType, setPage, setPageSize, setSearchTerm } from '../store/slices/pokemon.slice'
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
        searchTerm,
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
            // const pokes = getPokemonsPerPage( pokemonsByType, page, pageSize )
            const pokesFilterByTerm = pokemonsByType.filter( pokemon => pokemon.name.toLowerCase().includes( searchTerm.toLowerCase() ) )
            const data = searchTerm.trim().length > 0 ? pokesFilterByTerm : pokesFilterByTerm
            pokemons = {
                count      : data.length,
                currentPage: page,
                totalPages : Math.ceil( data.length / Number(pageSize) ),
                data       : getPokemonsPerPage( data, Number(page), Number(pageSize) )
            }
        }else {
            // const pokes = getPokemonsPerPage( allPokemons, page, pageSize )
            const pokesFilterByTerm = allPokemons.filter( pokemon => pokemon.name.toLowerCase().includes( searchTerm.toLowerCase() ) )
            const data = searchTerm.trim().length > 0 ? pokesFilterByTerm : allPokemons

            pokemons = {
                count      : data.length,
                currentPage: page,
                totalPages : Math.ceil( data.length / Number(pageSize) ),
                data       : getPokemonsPerPage( data, Number(page), Number(pageSize) )
            }
        }

        dispath( setPokemons(pokemons ))

    },[ allPokemons, pokemonsByType, page, pageSize, searchTerm])



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

    const onChangePageSize = ( pageSizeSelected ) => {
        dispath( setPageSize(pageSizeSelected) )
    }

    const onChangeSearchTerm = ( term ) => {
        dispath( setSearchTerm(term) )
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
        pageSize,
        onChangePageSize,
        searchTerm,
        onChangeSearchTerm
    }
}
