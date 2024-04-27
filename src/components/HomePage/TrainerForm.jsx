import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTrainer } from '../../store/slices/trainer.slice'
import { InputForm } from '../Shared/InputForm'
import './styles/trainerForm.css'

export const TrainerForm = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = ( value ) => {
        event.preventDefault()        
        if ( value === '' ) {
            return console.log('Ingresa tu nombre para comenzar')
        }
    
        dispatch( setTrainer( value ) )
        navigate('/pokedex')
    }
   
    return (
        <div className="trainer-form">
            <InputForm
                handleSubmit= { handleSubmit }
                placeholder="Tu nombre..."
            />
        </div>
    )
}
