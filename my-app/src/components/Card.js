import React, { useState } from "react"

function Card({ destination }) {

    const {name, image, description} = destination

    return (
        <div className="ui card">
            <div className="image">
                <img src={image} />
            </div>
            <div className="content">
                <a className="header">{name}</a>
                <div className="description">
                    <p>{description}</p>
                </div>
            </div>
            <div className="extra content">
                <span className="right floated star">
                <i className="star icon"></i>
                Favorite
                </span>
            </div>
        </div>
    )
}

export default Card