import { configureStore } from '@reduxjs/toolkit'
import trainerSlice from './slices/trainer.slice'
import pokemonSlice from './slices/pokemon.slice'
import UiSlice from './slices/ui.slice'

export const store = configureStore({
    reducer: {
        trainer: trainerSlice,
        pokemon: pokemonSlice,
        ui     : UiSlice,
    },
  })