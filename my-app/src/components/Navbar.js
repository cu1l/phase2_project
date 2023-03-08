import React from "react"

function Navbar({username}) {

    return (
        <div id="navbar" class="ui menu">
            <a class="item active">
                Destinations
            </a>
            <a class="item">
                Discover a park or landmark.
            </a>
            <div className="ui icon input small">
                <input className="ui action right icon input" type="text" placeholder="Find a place" />
                <i className="search icon"></i>
            </div>
            <a id="welcome-user" className="item right floated">
                <i class="user circle icon"></i> Welcome, {username}
            </a>

        </div>
    )

}

export default Navbar;