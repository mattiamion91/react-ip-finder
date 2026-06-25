import React, { useEffect, useState } from 'react';
//import MapComp from './components/MapComp.jsx'
import Map, { Marker } from "react-map-gl/mapbox"
import 'mapbox-gl/dist/mapbox-gl.css'
import { RiUserLocationFill } from 'react-icons/ri';

const API_KEY = import.meta.env.VITE_MAP_API_KEY;

const MapComp = ({ lat, lon }) => {

    // Setting up the initial viewport of the map
    const [viewState, setViewState] = useState({
        latitude: lat,
        longitude: lon,
        zoom: 12
    });

    // Viewport re-renders whenever latitude and longitude changes
    useEffect(() => {
        setViewState((prev) => ({
            ...prev,
            latitude: lat,
            longitude: lon
        }));
    }, [lat, lon]);

    return (
        <div className="map" style={{ width: '400px', height: '400px' }}>
            <Map
                mapboxAccessToken={API_KEY}
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                style={{ width: 400, height: 400 }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                <Marker classNamne="mark" longitude={lon} latitude={lat} anchor="bottom" color='blue'>
                </Marker>
            </Map>
        </div>
    );
};


export default MapComp;