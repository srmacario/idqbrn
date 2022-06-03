import { LatLng } from "leaflet";

export default class CityMarker {
    constructor(id, doenca, casos, lat, long) {
        this.id = id;
        this.doenca = doenca;
        this.casos = casos;
        this.lat = lat;
        this.long = long;
        this.pos = new LatLng(lat, long);
    }

    getDoenca() {
        return this.doenca;
    }
    getId() {
        return this.id;
    }
    getPos() {
        return this.pos;
    }
    getCasos() {
        return this.casos;
    }
}