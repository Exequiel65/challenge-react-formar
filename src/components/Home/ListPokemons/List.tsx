import "./List.css"
import CardPokemon from "../../Card-pokemon/cardPokemon";
import { IPokemon } from '../../../Types/interface';
import Loader from "../../Load/Loader";


interface Props{
  listPokemon : IPokemon[] | undefined
}

export default function List(props: Props) {
  const listPokemon = props.listPokemon

  if (listPokemon === undefined) {
    return (
      <Loader relative={false} />
    )
  }
  return (
    <section className="list-container">
        <div className="contain">
          {
            listPokemon.length === 0 && <h3 style={{textAlign: "center", width: "100%"}}>No hay Pokemons en la Pokedex</h3>
          }
          {
            listPokemon?.map((p, i)=> {
              return (<CardPokemon key={i} pokemon={p} />)
            }
            )
          }
            
        </div>
    </section>
  )
}
