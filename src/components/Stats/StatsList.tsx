import ItemList from "./ItemList"
import "./statsList.css"
export default function StatsList() {
    return (
        <div className="stats-container">
            <h4>Base Stats</h4>
            <div className="list-stats">
                <ItemList  />
                <ItemList  />
                <ItemList  />
                <ItemList  />
                <ItemList  />
            </div>
        </div>
    )
}
