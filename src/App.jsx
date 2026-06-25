import { useState, useEffect } from "react"
import Map from './components/Map.jsx'
import './App.css'

const App = () => {

    //set state vars
    const [ipDetails, setIpDetails] = useState(null)
    const [lat, setLat] = useState(12)
    const [lon, setLon] = useState(12)

    return (
        <>
            <h1>sono App.jsx</h1>
            <Map />
        </>
    )
}

export default App