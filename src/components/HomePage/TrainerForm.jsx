import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTrainer } from '../../store/slices/trainer.slice'

import './styles/trainerForm.css'

export const TrainerForm = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const inputRef = useRef()

    const handleSubmit = ( event ) => {
        event.preventDefault()

        const name = inputRef.current.value.trim()
        
        if ( name === '' ) {
            return console.log('Ingresa tu nombre para comenzar')
        }
    
        dispatch( setTrainer( name ) )
        navigate('/pokedex')
    }
    
    return (
        <form 
            onSubmit={ handleSubmit }
            className="trainer-form"
        >
            <input 
                type="text"
                ref={ inputRef }
                placeholder="Tu nombre..."
                className="trainer-form__input"
            />
            <button 
                type="submit"
                className="trainer-form__submit"
            >
                Comenzar
            </button>
        </form>
    )
}
