import React, { useState, useEffect } from "react"

function Card({ destination, isFavorited, handleFavoriteClick}) {
    //const [favorite, setFavorite] = useState(isFavorited)

    const {name, image, description} = destination;


    const togglefav = () => {
        isFavorited = !isFavorited;
        //setFavorite(!favorite)
        handleFavoriteClick(name, isFavorited);
    }


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
                <i className={isFavorited ? "yellow star icon" : "star icon"}></i>
                </span>
            </div>
        </div>
    )
}

export default Card;