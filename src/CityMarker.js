import { LatLng } from "leaflet";

export default class CityMarker {
    constructor(json, listaDoencas) {
        this.json = json;
        this.id = json['IBGE7'];
        this.nome = json['Municipio'];
        this.lat = parseFloat(json["latitude"].replace(',', '.'));
        this.long = parseFloat(json["longitude"].replace(',', '.'));
        this.listaDoencas = listaDoencas;
        this.pos = new LatLng(this.lat, this.long);
    }

    getNome() {
        return this.nome;
    }
    getId() {
        return this.id;
    }
    getPos() {
        return this.pos;
    }
    getTotalCasos() {
        let texto = "";
        for (let i = 0; i < this.listaDoencas.length; i++) {
            if (this.json[this.listaDoencas[i]] > 0)
                texto = texto + this.listaDoencas[i] + ": " + this.json[this.listaDoencas[i]] + "\n"
        }
        const novoTexto = texto.split('\n').map(str => <p key={str}>{str}</p>);
        return novoTexto;

    }
}