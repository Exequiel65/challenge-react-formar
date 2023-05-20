import './ImagePokemon.css'

export default function ImagePokemon() {
  return (
    <div className="image-pokemon-contain">
        <div className="image-pokemon">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
        </div>
        <div className="type-pokemon">
          <div className="item-type">
            <p>Type</p>
          </div>
          <div className="item-type">
            <p>Type</p>
          </div>
        </div>
      </div>
  )
}
