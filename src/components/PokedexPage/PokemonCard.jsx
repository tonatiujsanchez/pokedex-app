import PropTypes from 'prop-types'
import { useGetColorsFromImage } from '../../hooks'
import './styles/pokemonCard.css'

export const PokemonCard = ({ pokemon }) => {
    
    const { colors } = useGetColorsFromImage({ urlImage: pokemon.sprites.other?.['official-artwork'].front_default })

    const backgroundGradient = `linear-gradient( 0deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 25%, rgb(${ colors[0]?.join(', ') }) 25%, rgb(${ colors[4]?.join(', ') }) 100%)`

    const hp = pokemon.stats.find(stat => stat.stat.name === 'hp').base_stat
    const attack = pokemon.stats.find(stat => stat.stat.name === 'attack').base_stat
    const defense = pokemon.stats.find(stat => stat.stat.name === 'defense').base_stat
    const speed = pokemon.stats.find(stat => stat.stat.name === 'speed').base_stat


    if( colors.length === 0 ){
        return (
            <p>Cargando...</p>
        )
    }

    console.log(pokemon)
    return (
        <article
            className="pokemon"
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
                                // src={pokemon.sprites.other?.showdown.front_default} 
                                src={pokemon.sprites.other?.['official-artwork'].front_default} 
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
    pokemon: PropTypes.object.isRequired
}