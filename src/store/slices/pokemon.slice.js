import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        allPokemons: [],
        pokemonsByType: [],
        pokemons: {
            count: 0,
            currentPage: 0,
            totalPages: 0,
            data: []
        },
        isLoading: true,
        hasError: null,
        types: [],
        isLoadingTypes: true,
        hasErrorTypes: null,
        typeSelectedUrl: '',
        page: 1,
        pageSize: 16
    },
    reducers: {
        setAllPokemons: ( state, action ) => {
            state.allPokemons = action.payload
        },
        setPokemonsByType: ( state, action ) => {
            state.pokemonsByType = action.payload
        },
        setPokemons: ( state, action ) => {
            state.pokemons = action.payload
        },
        setIsLoading: ( state, action ) => {
            state.isLoading = action.payload
        },
        setHasError: ( state, action ) => {
            state.hasError = action.payload
        },
        setTypes: ( state, action ) => {
            state.types = action.payload
        },
        setIsLoadingTypes: ( state, action ) => {
            state.isLoadingTypes = action.payload
        },
        setHasErrorTypes: ( state, action ) => {
            state.hasErrorTypes = action.payload
        },
        setTypeSelected: ( state, action ) => {
            state.typeSelectedUrl = action.payload
            if(action.payload === '') {
                state.pokemonsByType = []
            }
            
        },
        setPage: ( state, action ) => {
            state.page = action.payload
        }
    }
})


export const {
    setAllPokemons,
    setPokemonsByType,
    setPokemons, 
    setIsLoading, 
    setHasError, 
    setTypes, 
    setIsLoadingTypes, 
    setHasErrorTypes, 
    setTypeSelected,
    setPage,
} = pokemonSlice.actions

export default pokemonSlice.reducer