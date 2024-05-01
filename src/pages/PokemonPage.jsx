import { useParams } from 'react-router-dom'
import { useGetColorsFromImage, useGetPokemon } from '../hooks'
import { PokeLoading } from '../components'
import { statsEs, typeColors, typesEs } from '../constants'
import { AlertIcon } from '../components/Icons'
import './styles/pokemonPage.css'

export const PokemonPage = () => {

    const { id } = useParams()

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
    const { pokemon, pokemonIsLoading, hasError } = useGetPokemon({ pokemonUrl })

    const urlImage = pokemon?.sprites.other?.['official-artwork'].front_default
    const { colors } = useGetColorsFromImage({ urlImage, isLoading: pokemonIsLoading })

    if (pokemonIsLoading) {
        return (
            <div className="pokemon-list__loader">
                <PokeLoading />
            </div>
        )
    }

    if (hasError) {
        return (
            <div className="has-error">
                <AlertIcon />
                <h2>{hasError}</h2>
            </div>
        )
    }

if (colors.length === 0) {
    <div className="pokemon-list__loader">
        <PokeLoading />
    </div>
}

const backgroundGradient = `linear-gradient(to top, rgb(${colors[0]?.join(', ')}), rgb(${colors[4]?.join(', ')})`

return (
    <main className="poke container">
        <article className="poke__content">
            <div
                className="poke__figure-content"
                style={{
                    background: backgroundGradient,
                }}
            >
                <figure className="poke__figure">
                    <img
                        src={urlImage}
                        alt={pokemon.name}
                        title={pokemon.name}
                    />
                </figure>
            </div>
            <div className="poke__info">
                <div
                    style={{ color: `rgb(${colors[0]})` }}
                    className="poke__id"
                >
                    <p className="poke__id-content">
                        #<span>{pokemon.id}</span>
                    </p>
                </div>
                <h1
                    className="poke__name"
                    style={{ color: `rgb(${colors[0]})` }}
                >
                    {pokemon.name}
                </h1>
                <div className="poke__dimensions">
                    <div className="poke__dimension">
                        <span className="poke__dimension-label">Peso</span>
                        <span className="poke__dimension-value">{pokemon.weight}</span>
                    </div>
                    <div className="poke__dimension">
                        <span className="poke__dimension-label">Peso</span>
                        <span className="poke__dimension-value">{pokemon.height}</span>
                    </div>
                </div>
                <div className="poke__types-skills">
                    <div className="poke__types-skills-content">
                        <span className="poke__types-skills-title">Tipo</span>
                        <div className="poke__types-skills-items">
                            {
                                pokemon.types.map(type => (
                                    <p
                                        key={type.type.url}
                                        className="poke__types-skills-item poke__types-skills-item--type"
                                        style={{ background: typeColors[type.type.name] }}
                                    >
                                        {typesEs[type.type.name]}
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div className="poke__types-skills-content">
                        <span className="poke__types-skills-title">Habilidades</span>
                        <div className="poke__types-skills-items">
                            <p className="poke__types-skills-item poke__types-skills-item--skill">
                                Crecimiento
                            </p>
                            <p className="poke__types-skills-item poke__types-skills-item--skill">
                                Clorofila
                            </p>
                        </div>
                    </div>
                </div>

                <div className="poke__stats">
                    <div className="poke__stats-header">
                        <h2 className="poke__stats-title">Stats</h2>
                        <figure className="poke__stats-figure">
                            <img src="/poke-border.svg" alt="Pokebola" />
                        </figure>
                    </div>
                    <ul className="poke__stats-list">
                        {
                            pokemon.stats.map(stat => (
                                <li key={stat.stat.url} className="poke__stats-item">
                                    <div className="poke__stats-content">
                                        <span className="poke__stats-label">{statsEs[stat.stat.name]}</span>
                                        <span className="poke__stats-value">{stat.base_stat}/150</span>
                                    </div>
                                    <div className="poke__stats-bar">
                                        <div
                                            className="poke__stats-bar-fill"
                                            style={{ width: `${(stat.base_stat * 100) / 150}%` }}
                                        >
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </article>
        <section className="poke__content poke__info">
            <div className="poke__stats-header">
                <h2 className="poke__stats-title">Movements</h2>
                <figure className="poke__stats-figure">
                    <img src="/poke-border.svg" alt="Pokebola" />
                </figure>
            </div>
            <ul className="movements">
                {
                    pokemon.moves.map(move => (
                        <li key={move.move.url} className="movement">
                            {move.move.name}
                        </li>
                    ))
                }
            </ul>
        </section>
    </main>
)
}
