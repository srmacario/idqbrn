//import "./css/styleCorpo.css";
import stylesCorpo from "./css/stylesCorpo.module.css"
import stylesMapa from "./css/stylesMapa.module.css"
import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import Select from 'react-select'

function UpdateCases() {
    var selectCidade = "";
    var selectDoenca = "";
    var newValue = 0;

    const handleInput = (event) => {
        console.log("handleInput:", event.target.value);
        newValue = event.target.value;
    }

    const updateDatabase = () => {
        
        console.log(selectCidade);
        newValue = newValue.toString();
        axios.post('http://localhost:8080/dados/update',{Municipio:selectCidade, Doenca:selectDoenca, Casos:newValue});
    }

    const [doencas_lista, setDoencasLista] = useState([]);
    const [dados, setDados] = useState([]);
    const [cidades_opt, setCidades] = useState([]);
    async function buscarDados() {
        try {
            axios.get('http://localhost:8080/dados/')
                .then(response => {
                    setDados(response.data);
                    let lista = []
                    let cidade = []
                    response.data.forEach(element => {
                        cidade.push({ label: element['Municipio'], value: element['Municipio'] })
                        if (lista.length === 0) {
                            for (let i = 11; i < Object.keys(element).length; i++) {
                                lista.push({ label: Object.keys(element)[i], value: Object.keys(element)[i] })
                            }
                        }
                    });
                    setDoencasLista(lista)
                    setCidades(cidade);
                })
                .catch(err => {
                    console.log(err);
                })
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        buscarDados();
    }, []);

    return (
        <>
            <div className={stylesCorpo.cabecalho}>
                <div className={stylesCorpo.pagina}>Atualizar casos</div>
            </div>

            <div className={stylesCorpo.corpo} onSubmit={updateDatabase}>
                <form className={stylesMapa.wrap} >
                <p></p>
                    <div className={stylesMapa.searchTerm}>
                        <Select options={cidades_opt} placeholder="Buscar por uma cidade..." openMenuOnClick={true}
                            onChange={e => {
                                selectCidade = e.value;
                                const find_cidade = dados.find(dado => dado['Municipio'] === selectCidade);
                                console.log(find_cidade);
                            }}
                            onInputChange={e => {
                                if (e.length > 0)
                                    selectCidade = e;
                                console.log("sv" + selectCidade)
                            }} on />
                    </div>
                    <p></p>
                    <div className={stylesMapa.searchTerm}>
                        <Select options={doencas_lista} placeholder="Buscar por uma doença..." openMenuOnClick={true}
                            onChange={e => {
                                selectDoenca = e.value;
                                console.log(selectDoenca);
                            }}
                            onInputChange={e => {
                                if (e.length > 0)
                                    selectDoenca = e;
                                console.log("sv" + selectDoenca)
                            }} on />
                    </div>
                    <p></p>
                    <div>
                        <input
                            className={stylesCorpo.insert}
                            type="number"
                            id="number"
                            name="number"
                            placeholder="Digite o novo número de casos."
                            onChange={handleInput}
                        />
                    </div>
                    <p></p>
                    <div>
                        <input className={stylesCorpo.input} type="submit" value="Salvar" />
                    </div>
                </form>
            </div>
        </>
    )
}
export default UpdateCases;