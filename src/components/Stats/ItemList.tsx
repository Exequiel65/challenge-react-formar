import { Stat } from "../../Types/interface"
import "./ItemList.css"
interface Props {
    stat : Stat | undefined,
    color : string
}
export default function ItemList(props: Props) {
    const stat = props.stat
    let nameStat;
    switch (true) {
        case stat?.stat.name === "hp":
            nameStat = "hp"
            break;
        case stat?.stat.name === "attack":
            nameStat = "atk"
            break;
        case stat?.stat.name === "defense":
            nameStat = "def"
            break;
        case stat?.stat.name === "special-attack":
            nameStat = "satk"
            break;
        case stat?.stat.name === "special-defense":
            nameStat = "sdef"
            break;
        case stat?.stat.name === "speed":
            nameStat = "spd"
            break;
    
        default:
            break;
    }
    return (
        <div className="item-list">
            <div className="type-stat">
                <p style={{color: props.color}}>{nameStat?.toUpperCase()}</p>
            </div>
            <div className="slide-contain">
                <p>{stat?.base_stat}</p>
                <div className="slides">
                    <div className="slide-stat" style={{width: `${stat?.base_stat}%`, backgroundColor: props.color}}></div>
                    <div className="slide-background"></div>
                </div>
            </div>
        </div>
    )
}
