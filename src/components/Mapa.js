import "./css/stylesMapa.css";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export function LocationMarkers({ markersArray }) {

    /*const map = useMapEvents({
        click(e) {
            markers.push(e.latlng);
            setMarkers((prevValue) => [...prevValue, e.latlng]);
        }
    });*/

    return (
        <React.Fragment>
            {markersArray.map(marker => <Marker position={marker.getPos()} key={marker.getId()}>
                <Popup>
                    <span>Casos de {marker.getDoenca()}: <br /> {marker.getCasos()}</span>
                </Popup>
            </Marker>)}
        </React.Fragment>
    );
}

export default function Mapa({ markersArray }) {
    return (
        <MapContainer id="map" center={[-14.613282, -48.484189]} zoom={5} scrollWheelZoom={true}>
            <TileLayer
                attribution='\u003ca href=\"https://carto.com/\" target=\"_blank\"\u003e\u0026copy; CARTO\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
                url="https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=jtOqBSIykHSBkZTIYEDL"
                crossOrigin={true}
                tileSize={512}
                zoomOffset={-1}
                minZoom={1}
            />
            <LocationMarkers markersArray={markersArray} />
        </MapContainer>
    );
}