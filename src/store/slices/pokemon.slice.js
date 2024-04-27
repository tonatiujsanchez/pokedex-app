import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemons: {
            count: 0,
            nextUrl: null,
            previousUrl: null,
            currentPage: 0,
            totalPages: 0,
            data: []
        },
        isLoading: true,
        hasError: null
    },
    reducers: {
        setPokemons: ( state, action ) => {
            state.pokemons = action.payload
        },
        setIsLoading: ( state, action ) => {
            state.isLoading = action.payload
        },
        setHasError: ( state, action ) => {
            state.hasError = action.payload
        }
    }
})


export const { setPokemons, setIsLoading, setHasError } = pokemonSlice.actions

export default pokemonSlice.reducer