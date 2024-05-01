import { createSlice } from '@reduxjs/toolkit'
import { THEME } from '../../constants'

const UiSlice = createSlice({
   name: 'ui',
   initialState: {
       theme: THEME.light
   },
   reducers: {
       setChangeThemeDark: (state ) => {
           state.theme = THEME.dark
       },
       setChangeThemeLight: (state ) => {
           state.theme = THEME.light
       },
    }
});



export const { setChangeThemeDark, setChangeThemeLight } = UiSlice.actions;

export default UiSlice.reducer