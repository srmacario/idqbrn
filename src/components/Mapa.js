import stylesMapa from "./css/stylesMapa.module.css"
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import * as L from 'leaflet'
import { iconMarker } from "./img/Icon";

export function LocationMarkers({ markersArray }) {

    return (
        <React.Fragment>
            {markersArray.map(marker => <Marker icon={iconMarker} position={marker.getPos()} key={marker.getId()}>
                <Popup>
                    <div className={stylesMapa.popupContent}>
                        <div className={stylesMapa.nomeCidade}>{marker.getNome()}</div><br />
                        <div className={stylesMapa.textoCidade}>Casos registrados:</div><br />
                        <span>{marker.getTotalCasos()}</span>
                    </div>
                </Popup>
            </Marker>)}
        </React.Fragment>
    );
}

function ChangeMapView({ markersArray, mapCenter }) {
    const map = useMap();
    if (markersArray.length === 1)//Quando se pesquisa por uma cidade, apenas um marcador será mostrado. Nesse caso, o mapa irá mostrar esse marcador.
        map.flyTo(mapCenter, 12);

    return null;
}


var bounds = new L.LatLngBounds(new L.LatLng(-90, -180), new L.LatLng(90, 180));

export default function Mapa({ markersArray, mapCenter }) {
    return (
        <MapContainer id={stylesMapa.map} center={[-14.613282, -48.484189]} zoom={5} scrollWheelZoom={true} maxBounds={bounds} maxBoundsViscosity={1.0} >
            <TileLayer
                attribution='© OpenStreetMap'
                url="https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=jtOqBSIykHSBkZTIYEDL"
                crossOrigin={true}
                tileSize={512}
                zoomOffset={-1}
                minZoom={3}
            />
            <LocationMarkers markersArray={markersArray} />

            <ChangeMapView markersArray={markersArray} mapCenter={mapCenter} />

        </MapContainer>
    );
}