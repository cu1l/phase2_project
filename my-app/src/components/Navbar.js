import React from "react"
import { useState } from "react";

function Navbar({ username, handleSearch, toggleFavorites }) {

    return (
        <div id="navbar" className="ui menu">
            <a className="item active">
                Destinations
            </a>
            <a className="item">
                Discover a park or landmark.
            </a>
            <div className="ui icon input small">
                <input className="ui action right icon input" type="text" placeholder="Find a place" onChange={handleSearch} />
                <i className="search icon"></i>
            </div>
            <a id="welcome-user" className="item right floated" onClick={() => toggleFavorites()}>
                <i className="user circle icon"></i> Welcome, {username} <br />
            </a>

        </div>
    )

}

export default Navbar;