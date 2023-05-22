import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./nav.css"
import { faMagnifyingGlass, faArrowDownWideShort } from "@fortawesome/free-solid-svg-icons"
export default function Search() {
    return (
        <div className="search-contain">
            <div className="search">
                <FontAwesomeIcon className="icon-search" icon={faMagnifyingGlass} />
                <input type="search" name="search" id="search" placeholder="Buscar" />
            </div>
            <div className="icon-sort-contain">
                <FontAwesomeIcon className="icon-sort" icon={faArrowDownWideShort} />
            </div>
        </div>
    )
}
