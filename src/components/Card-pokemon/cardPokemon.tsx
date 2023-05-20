import { Link } from "react-router-dom"
import "./cardPokemon.css"

export default function CardPokemon() {
  return (
    <Link to="/pokemon/1" className="card-container">
        <div className="number-pokemon">
            <p>#11111</p>
        </div>
        <div className="image-contain-pokemon">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
        </div>
        <div className="data-contain-card">
            <p>Pokemon name</p>
        </div>
    </Link>
  )
}
