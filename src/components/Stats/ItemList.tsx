import "./ItemList.css"

export default function ItemList() {
    return (
        <div className="item-list">
            <div className="type-stat">
                <p>HP</p>
            </div>
            <div className="slide-contain">
                <p>999</p>
                <div className="slides">
                    <div className="slide-stat"></div>
                    <div className="slide-background"></div>
                </div>
            </div>
        </div>
    )
}
