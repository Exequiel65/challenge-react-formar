import "./List.css"
import CardPokemon from "../../Card-pokemon/cardPokemon";

export default function List() {
  return (
    <section className="list-container">
        <div className="contain">
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
            <CardPokemon />
        </div>
    </section>
  )
}
