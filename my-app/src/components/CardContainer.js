import React, {useEffect, useState} from "react"
import ListDestinations from './DestinationList'
import Navbar from "./Navbar"
import Header from "./Header"

function CardContainer() {
    const destinationAPI = "http://localhost:4001/destinations"
    const [destinations, setDestinations] = useState([])
    useEffect(() => {
        fetch(destinationAPI)
        .then(r => r.json())
        .then(setDestinations)
    }, [])

    return (
        <div className="ui container">
            <Header />
            <Navbar />
            <div className="ui divider"></div>
            <div className="ui three stackable grid container">
                <ListDestinations destinations={destinations}/>
            </div>
        </div>
    )

}

export default CardContainer