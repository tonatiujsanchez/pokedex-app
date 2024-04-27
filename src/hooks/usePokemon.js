import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setHasError, setIsLoading, setPokemons } from '../store/slices/pokemon.slice'

export const usePokemons = ({ page=1, pageSize=16 }) => {
    
    const dispath = useDispatch()
    const { pokemons, isLoading, hasError } = useSelector(( store => store.pokemon ))


    useEffect(()=>{
        
        getPokemonUrls()

    },[page, pageSize])

    const getPokemonUrls = async() => {
        dispath( setIsLoading(true) )
        try {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=${ pageSize }`
            const { data:pokemonUrls } = await axios.get( url )

            const pokemonPromises = pokemonUrls.results.map( pokeUrl => getPokemon( pokeUrl.url ))
            const data = await Promise.all( pokemonPromises )

            const pokemons = {
                count      : pokemonUrls.count,
                nextUrl    : pokemonUrls.next,
                previousUrl: pokemonUrls.previus,
                currentPage: page,
                totalPages : Math.ceil( pokemonUrls.count / Number(pageSize) ),
                data
            }

            dispath( setPokemons(pokemons ))
            dispath( setHasError(null) )
            
        } catch (error) {
            const { msg } = error.response.data
            dispath( setHasError(msg) )  
        }finally {
            dispath( setIsLoading( false ) )
        }
    }


    const getPokemon = async( pokemonUrl ) => {
        try {
            const { data } = await axios.get( pokemonUrl )
            return data

        } catch (error) {
            return error
        } 
    }


    return { pokemons, isLoading, hasError }
}
