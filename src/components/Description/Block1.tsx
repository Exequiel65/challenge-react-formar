import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Block1.css'
import { faRulerVertical, faWeightHanging } from '@fortawesome/free-solid-svg-icons'

export default function Block1() {
    return (
        <div className="data-block-1" >
            <div className="weight-contain">
                <div className="weight">
                    <FontAwesomeIcon className='icon-block1' icon={faWeightHanging} />
                    <p>9.9 kg</p>
                </div>
                <p className="item-subtitle">Weight</p>
            </div>
            <div className="height-contain">
                <div className="height">
                    <FontAwesomeIcon className='icon-block1'  icon={faRulerVertical} />
                    <p>9.9 m</p>
                </div>
                <p className="item-subtitle">Height</p>
            </div>
            <div className="skill-contain">
                <div className="skill">
                    <p>Ability 1</p>
                    <p>Ability 1</p>
                </div>
                <p className="item-subtitle">Moves</p>
            </div>
        </div>

  )
}
