import L from 'leaflet';

const iconMarker = new L.Icon({
    iconUrl: require('../img/circle.png'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 20),
});

export { iconMarker };