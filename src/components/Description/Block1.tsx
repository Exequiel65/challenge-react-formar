import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Block1.css'
import { faRulerVertical, faWeightHanging } from '@fortawesome/free-solid-svg-icons'
import { Pokemon } from '../../Types/interface'
interface Props {
    pokemon : Pokemon | undefined,
  }
  
export default function Block1(props:Props) {
    const pokemon = props.pokemon
    return (
        <div className="data-block-1" >
            <div className="weight-contain">
                <div className="weight">
                    <FontAwesomeIcon className='icon-block1' icon={faWeightHanging} />
                    <p>{pokemon?.weight} kg</p>
                </div>
                <p className="item-subtitle">Weight</p>
            </div>
            <div className="height-contain">
                <div className="height">
                    <FontAwesomeIcon className='icon-block1'  icon={faRulerVertical} />
                    <p>{pokemon?.height} m</p>
                </div>
                <p className="item-subtitle">Height</p>
            </div>
            <div className="skill-contain">
                <div className="skill">
                    {
                        pokemon?.abilities.map((a, i)=>(
                            <p key={i}>{a.ability.name}</p>
                        ))
                    }
                </div>
                <p className="item-subtitle">Moves</p>
            </div>
        </div>

  )
}
