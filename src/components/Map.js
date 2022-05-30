import React from 'react'
import {MapContainer, TileLayer} from 'react-leaflet'
import './css/stylesMapa.css'

export default function Map(){

    return(
        <MapContainer id = "map" center={[-14.613282, -48.484189]} zoom={5} scrollWheelZoom={false}>
            <TileLayer
                attribution = '\u003ca href=\"https://carto.com/\" target=\"_blank\"\u003e\u0026copy; CARTO\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
                url="https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=jtOqBSIykHSBkZTIYEDL"
                crossOrigin = {true}
                tileSize = {512}
                zoomOffset = {-1}
                minZoom = {1}
            />
        </MapContainer>
    )
}