import "./css/stylesMapa.css";
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet'

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

var bounds = new L.LatLngBounds(new L.LatLng(-90, -180), new L.LatLng(90, 180));

export default function Mapa({ markersArray }) {
    return (
        <MapContainer id="map" center={[-14.613282, -48.484189]} zoom={5} scrollWheelZoom={true} maxBounds={bounds} maxBoundsViscosity={1.0}>
            <TileLayer
                attribution='© OpenStreetMap'
                url="https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=jtOqBSIykHSBkZTIYEDL"
                crossOrigin={true}
                tileSize={512}
                zoomOffset={-1}
                minZoom={3}
            />
            <LocationMarkers markersArray={markersArray} />
        </MapContainer>
    );
}