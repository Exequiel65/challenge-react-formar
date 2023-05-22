import { POKEMON_TYPE_COLORS } from "../../../CONSTANTS/colors"
import useGetTypePokemon from "../../../hooks/useGetTypePokemon"
import "./FilterType.css"

interface IProps{
    setType : any
    type : any,
}

export default function FilterType(props: IProps) {
    const { Types } = useGetTypePokemon()
    const handleClick = ()=>{
        const dropdown = document.querySelector(".drop-down")
        dropdown?.classList.toggle("ds-none")
    }
    return (
        <div className="contain-filter">
            <div className="type-sub">
                <p onClick={handleClick}>Filtrar:</p>
                {
                    props.type.map((t: any, i:any) =>(
                        <p className="type-selected" key={i}> {t}  </p>
                        // <span onClick={()=> props.delete(t)}> X </span>
                    ))
                }
            </div>
            <div className="drop-down ds-none">
                <p>Tipo:</p>
                <ul>
                    {
                        Types.map((t, i) => {
                            return <li key={i} onClick={()=> props.setType(t.name)} style={{backgroundColor: POKEMON_TYPE_COLORS[t.name]}} >{t?.name}</li>

                        })
                    }
                </ul>
            </div>
        </div>


    )
}
