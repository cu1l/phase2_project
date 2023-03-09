import React, { useEffect, useState } from "react"
import ListDestinations from './DestinationList'
import Navbar from "./Navbar"
import Header from "./Header"

function CardContainer({username, favorites, handleFavoriteClick}) {
    const destinationAPI = "http://localhost:4001/destinations"
    const [destinations, setDestinations] = useState([])
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(destinationAPI)
            .then(r => r.json())
            .then(setDestinations)
    }, [])

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }
    

    return (
        <div className="ui container">
            <div id="banner">
                <Header />
                <Navbar username={username} handleSearch={handleSearch}/>
            </div>
            <div id="grid" className="ui three column grid">
                <ListDestinations destinations={destinations.filter((destination) => (destination.name.toLowerCase().includes(searchTerm.toLowerCase())))} favorites={favorites} handleFavoriteClick={handleFavoriteClick} />
            </div>
        </div>
    )

}

export default CardContainer;