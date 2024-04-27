import PropTypes from 'prop-types'
import { useRef } from 'react'
import './styles/inputForm.css'

export const InputForm = ({ handleSubmit, placeholder }) => {

    const inputRef = useRef()

    return (
        <form
            onSubmit={() => handleSubmit( inputRef.current.value )}
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
                Comenzar
            </button>
        </form>
    )
}

InputForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
}