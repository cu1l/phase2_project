import React, {useEffect, useState} from "react"
import ListDestinations from './DestinationList'

function CardContainer() {
    const destinationAPI = "http://localhost:4001/destinations"
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch(destinationAPI)
        .then(r => r.json())
        .then(setDestinations)
    }, [])

    return (
        <div className="ui three stackable grid container">
            <ListDestinations destinations={destinations}/>
        </div>
    )

}

export default CardContainer