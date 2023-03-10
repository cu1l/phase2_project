import React, { useState, useEffect } from "react"

function Card({ destination, isFavorited, handleFavoriteClick}) {
    //const [favorite, setFavorite] = useState(isFavorited)

    const {name, image, description, activities_nearby, state} = destination;
    console.log(activities_nearby)
    const activities = activities_nearby.join(", ")


    const togglefav = () => {
        isFavorited = !isFavorited;
        //setFavorite(!favorite)
        handleFavoriteClick(name, isFavorited);
    }


    return (
        <div id="card" className="ui card">
            <div className="ui medium centered image">
                <img className="ui image" src={image} />
            </div>
            <div className="content">
                <h5 className="ui header">
                <div className="sub header">{state}</div>
                </h5>
                <a id="place-name" className="header">{name}</a>
                <div className="description">
                    <p>{description}</p>
                    <h3>Some Activities Include</h3>
                    <p>{activities}</p>
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