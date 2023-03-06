import React from "react"
import Card from './Card'

function ListDestinations({destinations}) {
    console.log(destinations)
    const destList = destinations.map((destination, index) => {
        return <Card key={index} destination={destination}/>
    })

    return (
        <div className="ui three stackable cards">
            {destList}
        </div>
    )
}
export default ListDestinations