import React, { useEffect, useState } from "react"
import ListDestinations from './DestinationList'
import Navbar from "./Navbar"
import Header from "./Header"

function CardContainer({destinations, username, favorites, handleFavoriteClick, toggleFavorites }) {
    const [searchTerm, setSearchTerm] = useState("");    

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }



    return (
        <div className="ui container">
            <div id="banner">
                <Header />
                <Navbar username={username} handleSearch={handleSearch} toggleFavorites={toggleFavorites} />
            </div>
            <div id="grid" className="ui grid container">
                <div className="column"><ListDestinations destinations={destinations.filter((destination) => (destination.name.toLowerCase().includes(searchTerm.toLowerCase())))} favorites={favorites} handleFavoriteClick={handleFavoriteClick} /></div>
            </div>
        </div>
    )

}

export default CardContainer;