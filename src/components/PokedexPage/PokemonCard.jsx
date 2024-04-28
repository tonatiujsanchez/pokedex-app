import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useGetColorsFromImage, useGetPokemon } from '../../hooks'
import './styles/pokemonCard.css'

export const PokemonCard = ({ pokemonUrl }) => {
    
    const [isHovered, setIsHovered] = useState(false)
    const { pokemon, pokemonIsLoading, hasError } = useGetPokemon({ pokemonUrl })

    const navigate = useNavigate() 

    const { colors } = useGetColorsFromImage({ urlImage: pokemon?.sprites.other?.['official-artwork'].front_default })
    

    if( colors.length === 0 || pokemonIsLoading ){
        return (
            <div className="pokemon-card__skeleton"></div>
        )
    }


    if( hasError ){
        return (
            <h2>hasError</h2>
        )
    }

    const hp = pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat
    const attack = pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat
    const defense = pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat
    const speed = pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat

    const backgroundGradient = `linear-gradient( 0deg, var(--card-color) 0%, var(--card-color) 25%, rgb(${ colors[0]?.join(', ') }) 25%, rgb(${ colors[4]?.join(', ') }) 100%)`


    const handleClickPokemon = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

    return (
        <article
            className="pokemon"
            onClick={ handleClickPokemon }
            onMouseEnter={ ()=> setIsHovered(true) }
            onMouseLeave={ ()=> setIsHovered(false) }
            style={{
                backgroundColor: `rgba(${ colors[0]?.join(', ') })`,
            }}
        >
            <div className="pokemon__content">
                <header className="pokemon__header">
                    <div 
                        className="pokemon__figure-content"
                        style={{
                            background: backgroundGradient
                        }}
                    >
                        <figure className="pokemon__figure">
                            <img 
                                src={
                                    isHovered 
                                        ?( pokemon.sprites.other?.showdown.front_default ?? pokemon.sprites.other?.['official-artwork'].front_default )
                                        :pokemon.sprites.other?.['official-artwork'].front_default
                                } 
                                alt={ pokemon.name } 
                                title={ pokemon.name }
                            />
                        </figure>
                    </div>
                    <h3 className="pokemon__name" style={{ color: `rgb(${ colors[0]?.join(', ') })`}}>{ pokemon.name }</h3>
                    <div className="pokemon__types">
                        <ul className="pokemon__types-list">
                            {
                                pokemon.types.map( type => (
                                    <li key={ type.type.url }>{ type.type.name }</li>
                                ))
                            }
                        </ul>
                        <p className="pokemon__types-title">Tipo</p>
                    </div>
                </header>
                <ul className="pokemon__skills">
                    <li>
                        <p className="pokemon__skill-title">hp</p>
                        <p
                            className="pokemon__skill"
                            style={{ color: `rgb(${ colors[0]?.join(', ') })` }}
                        >
                            { hp }
                        </p>
                    </li>
                    <li>
                        <p className="pokemon__skill-title">Ataque</p>
                        <p
                            className="pokemon__skill"
                            style={{ color: `rgb(${ colors[0]?.join(', ') })` }}
                        >
                            { attack }
                        </p>
                    </li>
                    <li>
                        <p className="pokemon__skill-title">Defensa</p>
                        <p
                            className="pokemon__skill"
                            style={{ color: `rgb(${ colors[0]?.join(', ') })` }}
                        >
                            { defense }
                        </p>
                    </li>
                    <li>
                        <p className="pokemon__skill-title">Velocidad</p>
                        <p
                            className="pokemon__skill"
                            style={{ color: `rgb(${ colors[0]?.join(', ') })` }}
                        >
                            { speed }
                        </p>
                    </li>
                </ul>
            </div>
        </article>
    )
}

PokemonCard.propTypes = {
    pokemonUrl: PropTypes.string.isRequired
}