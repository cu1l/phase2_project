import React, { useEffect, useState } from "react"
import ListDestinations from './DestinationList'
import Navbar from "./Navbar"
import Header from "./Header"

function CardContainer({ username, favorites, handleFavoriteClick }) {
    const destinationAPI = "http://localhost:4001/destinations"
    const [destinations, setDestinations] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [favoritesOnly, setFavoritesOnly] = useState(false);
    

    useEffect(() => {
        fetch(destinationAPI)
            .then(r => r.json())
            .then(destinations => {
                setDestinations(destinations)

                if (favoritesOnly) {
                    setDestinations([...destinationsDisplayed]);
                }
            })
    }, [favoritesOnly])

    

    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }

    const destinationsDisplayed = [];
    for (const favorite of favorites) {
        destinations.forEach((destination) => {
            if (destination.name === favorite) {
                destinationsDisplayed.push(destination);
            }
        });
    }
    



    function toggleFavorites() {
        setFavoritesOnly(!favoritesOnly);

    }


    return (
        <div className="ui container">
            <div id="banner">
                <Header />
                <Navbar username={username} handleSearch={handleSearch} toggleFavorites={toggleFavorites} />
            </div>
            <div id="grid" className="ui three column grid">
                <ListDestinations destinations={destinations.filter((destination) => (destination.name.toLowerCase().includes(searchTerm.toLowerCase())))} favorites={favorites} handleFavoriteClick={handleFavoriteClick} />
            </div>
        </div>
    )

}

export default CardContainer;