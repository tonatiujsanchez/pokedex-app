import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChangeThemeDark, setChangeThemeLight } from '../store/slices/ui.slice'
import { THEME, THEME_STORAGE_KEY } from '../constants'

export const useTheme = () => {

    const { theme } = useSelector(state => state.ui)
    const dispatch = useDispatch()

    useEffect(()=>{
        const selectedTheme = localStorage.getItem( THEME_STORAGE_KEY ) ?? THEME.light

        if( selectedTheme === THEME.light ){
            setThemeLight()
        }else {
            setThemeDark()
        }
    },[])
    

    const setThemeDark = () => {
        dispatch( setChangeThemeDark() )
        localStorage.setItem( THEME_STORAGE_KEY, THEME.dark )
        document.body.className = THEME.dark
    }

    const setThemeLight = () => {
        dispatch( setChangeThemeLight() )
        localStorage.setItem( THEME_STORAGE_KEY, THEME.light )
        document.body.className = THEME.light
    }
    
    return {
        theme,
        setThemeDark,
        setThemeLight
    }
}
