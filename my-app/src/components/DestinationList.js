import React from "react"
import Card from './Card'

function ListDestinations({ destinations, favorites, handleFavoriteClick }) {

    console.log(destinations)
    const destList = destinations.map((destination, index) => {
        const foundLocation = favorites.find((favorite) => (favorite === destination.name))
        let isFavorited = false;

        if (foundLocation !== undefined && foundLocation.length > 0) {
            isFavorited = true;
        }

        return <Card key={index} destination={destination} isFavorited={isFavorited} handleFavoriteClick={handleFavoriteClick} />

    })

    return (
        <div className="ui three stackable cards">
            {destList}
        </div>
    )
}
export default ListDestinations;