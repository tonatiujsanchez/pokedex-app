import { useEffect, useState } from 'react'
import axios from 'axios'

export const useGetPokemon = ({ pokemonUrl }) => {
    
    const [pokemonIsLoading, setPokemonIsLoading] = useState(false)
    const [hasError, setHasError] = useState(null)
    const [pokemon, setPokemon] = useState()

    useEffect(()=>{
        getPokemon()
    },[])

    const getPokemon = async() => {
        setPokemonIsLoading(true)
        try {
            const { data } = await axios.get( pokemonUrl )
            setPokemon(data)
            setHasError(null)
        } catch (error) {
            setHasError(error.response.data)
        }finally {
            setPokemonIsLoading(false)
        }
    }



    
    return {
        pokemon,
        pokemonIsLoading,
        hasError,
    }
}
