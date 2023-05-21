import { Pokemon } from '../../Types/interface'
import { getColorType } from '../../utils/getColorType'
import './ImagePokemon.css'
interface Props {
  pokemon : Pokemon | undefined
}

export default function ImagePokemon(props:Props) {
  const pokemon = props.pokemon
  return (
    <div className="image-pokemon-contain">
        <div className="image-pokemon">
          <img src={pokemon?.sprites.other?.['official-artwork'].front_default} alt="" />
        </div>
        <div className="type-pokemon">
          {
            pokemon?.types.map( (t, i)=>(
              <div key={i} className="item-type" style={{backgroundColor : getColorType(pokemon, i)}}>
                <p>{t.type.name}</p>
              </div>
            ))
          }
          
        </div>
      </div>
  )
}
