import { Link } from "react-router-dom"
import "./cardPokemon.css"
import { IPokemon } from "../../Types/interface"
import { POKEMON_TYPE_COLORS } from "../../CONSTANTS/colors"
interface Props{
  pokemon : IPokemon
}

export default function CardPokemon(props: Props) {
  const pokemon = props.pokemon
  const getColorType = ()=>{
    const type = pokemon?.types?.[0].type.name ? pokemon?.types?.[0].type.name : "normal"
    return POKEMON_TYPE_COLORS[type]
  }
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-container">
        <div className="number-pokemon">
            <p>#{pokemon.order}</p>
        </div>
        <div className="image-contain-pokemon">
            <img src={pokemon.image} alt="" />
        </div>
        <div className="data-contain-card" style={{backgroundColor : getColorType()}}>
            <p>{pokemon.name}</p>
        </div>
    </Link>
  )
}
