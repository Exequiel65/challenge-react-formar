
import { Link } from "react-router-dom"
import "./nav.css"
export default function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-title-contain">
        <div className="image-contain">
          <img src="images/pokebola.png" alt="logo" />
        </div>
        <Link to="/" className="nav-title">Inicio</Link>
        <Link to="/pokemon" className="nav-title">Ver Pokemons</Link>
        <Link to="/mis-pokemons" className="nav-title">Mis Pokemons</Link>
      </div>

      
    </div>
  )
}
