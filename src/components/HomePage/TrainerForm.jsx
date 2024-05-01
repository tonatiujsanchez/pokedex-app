import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setTrainer } from '../../store/slices/trainer.slice'
import { InputForm } from '../Shared/InputForm'
import './styles/trainerForm.css'
import { useState } from 'react'

export const TrainerForm = () => {
    
    const [msgError, setMsgError] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSetMsgError = (msg) => {
        setMsgError(msg)

        setTimeout(() => {
            setMsgError('')
        }, 3000);
    }

    const handleSubmit = ( value ) => {        
        if ( value === '' ) {
            return onSetMsgError('Ingresa tu nombre para comenzar')
        }
    
        dispatch( setTrainer( value ) )
        navigate('/pokedex')
    }
   
    return (
        <div className="trainer-form">
            <InputForm
                handleSubmit= { handleSubmit }
                textButton="Comenzar"
                placeholder="Tu nombre..."
            />
            <span className="trainer-form__msg-error">{ msgError }</span>
        </div>
    )
}
