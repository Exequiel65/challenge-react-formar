import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './pokemonHeader.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export default function PokemonHeader() {
    return (
        <div className="pokemon-header">
            <div className="return-page">
                <FontAwesomeIcon className='icon-arrow-left' icon={faArrowLeft} />
            </div>
            <div className="name-contain">
                <p>Pokemon Name</p>
            </div>
            <div className="number-contain">
                <p>#999</p>
            </div>
        </div>
    )
}
