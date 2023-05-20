import Block1 from "../../components/Description/Block1"
import ImagePokemon from "../../components/ImagePokemonDetail/ImagePokemon"
import StatsList from "../../components/Stats/StatsList"
import PokemonHeader from "../../components/pokemonDetaiHeader/PokemonHeader"
import "./PokemonDetail.css"
import PokeballBackground from "../../assets/Pokeball.svg"
export const PokemonDetail = () => {
  return (
    <div className="pokemon-detail-container">
      <img className="pokeball-background" src={PokeballBackground} alt="" />
      <PokemonHeader />
      <ImagePokemon />
      <div className="description-container">
        <h4>About</h4>
        
        <Block1 />
        <div className="description-pokemon">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illum labore, expedita deleniti magnam quibusdam maiores unde similique iste aspernatur provident obcaecati. Quasi nesciunt nulla eveniet, at tempora illo porro.</p>
        </div>

       <StatsList />

      </div >
    </div>
  )
}
