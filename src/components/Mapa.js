import stylesMapa from "./css/stylesMapa.module.css"
import React from 'react';
import { MapContainer, TileLayer, Popup, useMap, CircleMarker } from 'react-leaflet';
import * as L from 'leaflet'

export function LocationMarkers({ markersArray }) {

    return (
        <React.Fragment>
            {markersArray.map(marker => <CircleMarker radius={marker.getTotalCasosNumber()} weight={0} center={marker.getPos()} key={marker.getId()} color={'#e74c3c'} fillOpacity={0.6} >
                <Popup>
                    <div className={stylesMapa.popupContent}>
                        <div className={stylesMapa.nomeCidade}>{marker.getNome()} ({marker.getUF()}) </div><br />
                        <div className={stylesMapa.textoCidade}>População em 2010: {marker.getPopulation()}</div><br />
                        <div className={stylesMapa.textoCidade}>Casos registrados:</div><br />
                        <span>{marker.getTotalCasos()}</span>
                    </div>
                </Popup>
            </CircleMarker>)}
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
        <MapContainer id={stylesMapa.map} prefereCanvas={false} center={[-14.613282, -48.484189]} zoom={5} scrollWheelZoom={true} maxBounds={bounds} maxBoundsViscosity={1.0} >
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