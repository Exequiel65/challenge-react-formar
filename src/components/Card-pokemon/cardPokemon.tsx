import { Link } from "react-router-dom"
import "./cardPokemon.css"
import { IPokemon } from "../../Types/interface"

import { getColorType } from "../../utils/getColorType"
interface Props{
  pokemon : IPokemon
}

export default function CardPokemon(props: Props) {
  const pokemon = props.pokemon
  
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-container animate__animated animate__fadeInUp">
        <div className="number-pokemon">
            <p>#{pokemon.order}</p>
        </div>
        <div className="image-contain-pokemon">
            <img src={pokemon.image} alt="" />
        </div>
        <div className="data-contain-card" style={{backgroundColor : getColorType(pokemon, 0)}}>
            <p>{pokemon.name}</p>
        </div>
    </Link>
  )
}
