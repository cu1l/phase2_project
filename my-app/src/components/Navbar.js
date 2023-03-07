import React from "react"

function Navbar() {

    return (
        <div class="ui menu">
        <a class="item active">
            Destinations
        </a>
        <a class="item">
            placeholder
        </a>
        <div className="ui icon input small">
        <input className="ui action right icon input" type="text" placeholder="Search..."/>
        <i className="search icon"></i>
        </div>
    </div>
    )

}

export default Navbar