import { usePokemons } from '../../hooks'
import './styles/selectPageSize.css'

export const SelectPageSize = () => {

    const { pageSize, onChangePageSize } = usePokemons()

    return (
        <select
            onChange={({ target }) => onChangePageSize(target.value) }
            value={ pageSize }
            className="select-count"
        >
            <option value="4">4</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
        </select>
    )
}
