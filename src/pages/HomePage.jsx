import { ThemeButton, TrainerForm } from '../components'
import './styles/homePage.css'

export const HomePage = () => {
    return (
        <div className="home">
            <main className="home__main">
                <figure className="home__figure">
                    <img 
                        src="/pokedex-logo.webp" 
                        alt="Pokedex título"
                        title="Pokedex título"
                    />
                </figure>
                <div className="home__text">
                    <h1>¡Hola entrenador!</h1>
                    <p>Para poder comenzar, dame tu nombre</p>
                </div>
                <TrainerForm />
                <div className="home__theme-button">
                    <ThemeButton />
                </div>
            </main>
            <footer className="home__footer">
                <div className="home__footer-red"></div>
                <div className="home__footer-black"></div>
                <figure className="home__footer-figure">
                    <img 
                        src="/pokedex-circle.webp"
                        alt="Pokedex circle"
                        title="Pokedex circle"
                    />
                </figure>
            </footer>
        </div>
    )
}
