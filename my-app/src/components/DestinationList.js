import React from "react"
import Card from './Card'

function ListDestinations({ destinations, favorites, handleFavoriteClick }) {

    const destList = destinations.map((destination, index) => {
        const foundLocation = favorites.find((favorite) => (favorite === destination.name))
        let isFavorited;

        if (foundLocation !== undefined && foundLocation.length > 0) {
            isFavorited = true;
        } else {
            isFavorited = false;
        }

        return <Card key={index} destination={destination} isFavorited={isFavorited} handleFavoriteClick={handleFavoriteClick} />

    })

    return (
        <div className="ui three centered stackable cards">
            {destList}
        </div>
    )
}
export default ListDestinations;