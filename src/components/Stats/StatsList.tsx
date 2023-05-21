import { Pokemon } from "../../Types/interface"
import ItemList from "./ItemList"
import "./statsList.css"
interface Props {
    pokemon : Pokemon | undefined,
    color : string
  }
  
export default function StatsList(props:Props) {
    const pokemon = props.pokemon
    return (
        <div className="stats-container">
            <h4 style={{color: props.color}}>Base Stats</h4>
            <div className="list-stats">
                {
                    pokemon?.stats.map((s, i) =>{
                        return <ItemList stat={s} key={i} color={props.color} />

                    })
                }
            </div>
        </div>
    )
}
