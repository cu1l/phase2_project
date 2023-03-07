import React, { useState } from "react"

function Card({ destination }) {
    const [favorite, setFavorite] = useState("false")

    const togglefav = () => {
        setFavorite(!favorite)
        console.log(favorite)
    }

    const {name, image, description} = destination

    return (
        <div className="ui card">
            <div className="ui medium centered image">
                <img className="ui image" src={image} />
            </div>
            <div className="content">
                <a className="header">{name}</a>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="extra content">
                <span className="right floated star icon" onClick={togglefav}>
                <i className={favorite ? "star icon" : "yellow star icon"}></i>
                </span>
            </div>
        </div>
    )
}

export default Card