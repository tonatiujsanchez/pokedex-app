import { THEME } from '../../constants'
import { useTheme } from '../../hooks'
import { MoonIcon, SunIcon } from '../Icons'
import './styles/themeButton.css'

const pokemonLightTheme = {
    name: 'Haunter',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/93.gif'
}

const pokemonDarkTheme = {
    name: 'Charizard',
    url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/6.gif'
}

export const ThemeButton = () => {

    const { theme, setThemeDark, setThemeLight } = useTheme()
    
    const imageTheme = theme === THEME.light
        ? pokemonLightTheme
        : pokemonDarkTheme

    return (
        <div className={`change-theme change-theme__${ theme }`}>
            <figure className="change-theme__figure">
                <img src={ imageTheme.url } alt={ imageTheme.name } />
            </figure>
            <button
                onClick={ ()=> theme === THEME.light ? setThemeDark() : setThemeLight() }
                className="change-theme__button"
            >
                { theme === THEME.light ? <MoonIcon /> : <SunIcon /> }
            </button>
        </div>
    )
}
