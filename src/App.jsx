import { useState, useEffect } from "react"
import Map from './components/Map.jsx'
import './App.css'

const App = () => {

    //set state vars
    const [ipDetails, setIpDetails] = useState({})
    const [lat, setLat] = useState(12)
    const [lon, setLon] = useState(12)

    //fetch API once when the component is mounted
    useEffect(() => {
        const getId = async () => {
            try {
                const response = await fetch("https://ipapi.co/json")
                if (response.ok) {
                    const data = await response.json()
                    console.log(data);
                    setIpDetails(data)
                } else {
                    throw new Error("Failed to fetch data")
                }
            } catch (err) {
                console.error("Error:", err);
            }
        }
        getId()
    }, [])

    return (
        <>
            <h1 className="heading">IP Adress Finder</h1>
            <div className="App">
                <div className="left">
                    <h4>What is my IPv4 address?</h4>
                    <h2 id="ip">{ipDetails.ip}</h2>
                    <h4>Approximate location: </h4>
                    <p>{ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}</p>
                    <h4>Internet Service Provider(ISP):</h4>
                    <p>{ipDetails.org}</p>
                </div>
            </div>
            <div>
                <Map
                    lat={lat}
                    lon={lon}
                />
            </div>
        </>
    )
}

export default App