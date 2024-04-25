import { createSlice } from '@reduxjs/toolkit'

export const trainerSlice = createSlice({
    name: 'trainer',
    initialState: {
        name: null
    },
    reducers: {
        setTrainer: (_state, action) => ({ name: action.payload })
    },
})


export const { setTrainer } = trainerSlice.actions

export default trainerSlice.reducer