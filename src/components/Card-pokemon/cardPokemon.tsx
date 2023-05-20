import "./cardPokemon.css"
export default function CardPokemon() {
  return (
    <div className="card-container">
        <div className="number-pokemon">
            <p>#11111</p>
        </div>
        <div className="image-contain-pokemon">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
        </div>
        <div className="data-contain-card">
            <p>Pokemon name</p>
        </div>
    </div>
  )
}
