import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './pokemonHeader.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import {  Pokemon } from '../../Types/interface'
import { useNavigate } from 'react-router-dom'
interface Props {
    pokemon : Pokemon | undefined
}

export default function PokemonHeader(props: Props) {
    const pokemon = props.pokemon
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate(-1)
    }
    return (
        <div className="pokemon-header">
            <div className="return-page" onClick={handleClick}>
                <FontAwesomeIcon className='icon-arrow-left' icon={faArrowLeft} />
            </div>
            <div className="name-contain">
                <p>{pokemon?.name}</p>
            </div>
            <div className="number-contain">
                <p>#{pokemon?.order}</p>
            </div>
        </div>
    )
}
