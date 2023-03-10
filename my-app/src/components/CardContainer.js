import React, { useEffect, useState } from "react"
import ListDestinations from './DestinationList'
import Navbar from "./Navbar"
import Header from "./Header"

function CardContainer({destinations, username, favorites, handleFavoriteClick, toggleFavorites }) {
    const [searchTerm, setSearchTerm] = useState("");    

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }


    function makeActivitiesLowerCase(destination) {
        const lowerCaseActivities = destination.activities_nearby.map((activity) => activity.toLowerCase());
        return lowerCaseActivities;
    }

    return (
        <div className="ui container">
            <div id="banner">
                <Header />
                <Navbar username={username} handleSearch={handleSearch} toggleFavorites={toggleFavorites} />
            </div>
            <div id="grid" className="ui grid container">
                <div className="column"><ListDestinations destinations={destinations.filter((destination) => (destination.name.toLowerCase().includes(searchTerm.toLowerCase()) || (destination.state.toLowerCase().includes(searchTerm.toLowerCase())) || (makeActivitiesLowerCase(destination).includes(searchTerm.toLowerCase())) ) )} favorites={favorites} handleFavoriteClick={handleFavoriteClick} /></div>
            </div>
        </div>
    )

}

export default CardContainer;