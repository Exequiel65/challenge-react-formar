import Block1 from "../../components/Description/Block1"
import ImagePokemon from "../../components/ImagePokemonDetail/ImagePokemon"
import StatsList from "../../components/Stats/StatsList"
import PokemonHeader from "../../components/pokemonDetaiHeader/PokemonHeader"
import "./PokemonDetail.css"
import PokeballBackground from "../../assets/Pokeball.svg"
import { useParams } from "react-router-dom"
import useGetPokemonDetail from "../../hooks/useGetPokemonDetail"
import { getColorType } from "../../utils/getColorType"
import Loader from "../../components/Load/Loader"

export const PokemonDetail = () => {
  const params = useParams();
  const { Pokemon } = useGetPokemonDetail(params.id)
  const color:string = getColorType(Pokemon, 0)
  return (
    <div className="pokemon-detail-container" style={{backgroundColor: color}}>
      <img className="pokeball-background" src={PokeballBackground} alt="" />
      {
        !Pokemon && <Loader relative={true} /> 
      }
      {
        Pokemon && (
          <>
            <PokemonHeader pokemon={Pokemon} />
            <ImagePokemon pokemon={Pokemon} />
            <div className="description-container" >
              <h4 style={{color: color}} >About</h4>
              
              <Block1 pokemon={Pokemon}/>
              <StatsList pokemon={Pokemon}  color={color}/>

            </div >
            <div className="button-contain">
              <button>Agregar a mi Pokedex</button>
            </div>
          </>

        )
      }
    </div>
  )
}
