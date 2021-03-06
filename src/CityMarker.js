import { LatLng } from "leaflet";

export default class CityMarker {
    constructor(json, listaDoencas) {
        this.json = json;
        this.id = json['IBGE7'];
        this.nome = json['Municipio'];
        this.uf = json['UF'];
        this.lat = parseFloat(json["latitude"].replace(',', '.'));
        this.long = parseFloat(json["longitude"].replace(',', '.'));
        this.listaDoencas = listaDoencas;
        this.pop = json['População 2010']
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
    getPopulation() {
        return this.pop
    }
    getUF() {
        return this.uf;
    }
    getTotalCasosNumber() {
        let valor = 0.0;
        for (let i = 0; i < this.listaDoencas.length; i++) {
            valor = valor + parseInt(this.json[this.listaDoencas[i]])
        }
        if (valor > 10000)
            valor = 10000
        valor = valor / 10000
        valor = valor * 15
        if (valor < 7)
            valor = 7

        return valor
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