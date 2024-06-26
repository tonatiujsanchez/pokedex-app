import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import './styles/inputForm.css'

export const InputForm = ({ handleSubmit, textButton, placeholder, value='' }) => {

    const inputRef = useRef()

    useEffect(() => {
        if(value !== '') {
            inputRef.current.value = value
        }
    },[])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        handleSubmit( inputRef.current.value )
    }

    return (
        <form
            onSubmit={ handleFormSubmit }
            className="input-form"
        >
            <input
                type="text"
                ref={inputRef}
                placeholder={ placeholder }
                className="input-form__input"
            />
            <button
                type="submit"
                className="input-form__submit"
            >
                { textButton }
            </button>
        </form>
    )
}

InputForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    textButton: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string
}