import React, { useState } from "react"

function Card({ destination }) {
    const [favorite, setFavorite] = useState(false)

    const togglefav = () => {
        setFavorite(!favorite)
    }

    const {name, image, description} = destination

    return (
        <div id="card" className="ui fluid card">
            <div className="ui medium centered image">
                <img className="ui image" src={image} />
            </div>
            <div className="content">
                <a id="place-name" className="header">{name}</a>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="extra content">
                <span className="right floated star icon" onClick={togglefav}>
                <i className={favorite ? "yellow star icon" : "star icon"}></i>
                </span>
            </div>
        </div>
    )
}

export default Card;