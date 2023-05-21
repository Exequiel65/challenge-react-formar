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
            listPokemon?.map((p, i)=> {
              return (<CardPokemon key={i} pokemon={p} />)
            }
            )
          }
            
        </div>
    </section>
  )
}
