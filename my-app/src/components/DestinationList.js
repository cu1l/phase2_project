import React from "react"
import Card from './Card'

function ListDestinations({destinations}) {
    console.log(destinations)
    const destList = destinations.map((destination) => {
        return <Card destination={destination}/>
    })

    return (
        <div className="ui three stackable cards">
            {destList}
        </div>
    )
}
export default ListDestinations