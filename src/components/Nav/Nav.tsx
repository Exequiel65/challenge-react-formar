import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./nav.css"
import { faMagnifyingGlass, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons"
export default function Nav() {
  return (
    <div className="nav-container">
      <div className="nav-title-contain">
        <div className="image-contain">
          <img src="images/pokebola.png" alt="logo" />
        </div>
        <p className="nav-title">Pokédex</p>
      </div>

      <div className="search-contain">
        <div className="search">
          <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass}  />
          <input type="search" name="search" id="search" placeholder="Buscar" />
        </div>
        <div className="icon-sort-contain">
          <FontAwesomeIcon className="icon-sort" icon={faArrowDownWideShort} />
        </div>
      </div>
    </div>
  )
}
