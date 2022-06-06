import stylesCorpo from "./css/stylesCorpo.module.css"
import React, { useEffect, useState } from 'react'
import { Navigate, Link } from "react-router-dom";
import axios from 'axios'

function UpdateInfoDisease() {
    const [doencas_lista, setDoencasLista] = useState([]);

    async function buscarDoencas() {
        try {
            var lista = []
            axios.get('http://localhost:8080/element/')
                .then(response => {
                    if (doencas_lista.length === 0) {
                        for (let i = 11; i < Object.keys(response.data).length; i++) {
                            lista.push(Object.keys(response.data)[i]);
                        }
                        setDoencasLista(lista);
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        buscarDoencas();
    }, []);

    const [disease, setDisease] = useState('Dengue');
    const handleClick = (event) => {
        event.preventDefault();
        //console.log(Object.values(disease).toString().replaceAll(',',''));
        var doenca = Object.values(disease).toString().replaceAll(',', '');
        openPage(doenca);


    }
    const handleChange = (event) => {
        const doencaSelecionada = event.target.value;

        setDisease(doencaSelecionada);
        //console.log({disease});        
    }
    function openPage(link) {
        var Link = '/update_info/' + link;
        //console.log(link);
        //navigate(Link);
        //return (Link);
        window.location.replace(Link);
    }
    return (
        <>
            <div className={stylesCorpo.cabecalho}>
                <div className={stylesCorpo.pagina}>Escolher doença a ser atualizada</div>

            </div>
            <form onSubmit={handleClick}>
                <div className={stylesCorpo.corpo}>
                    <select className={stylesCorpo.select} name="doenca" onChange={handleChange}>
                        {doencas_lista.map(doenca => <option key={doenca} value={doenca} >{doenca}</option>)}
                    </select>
                    <p></p>
                    <button className={stylesCorpo.input} type="submit">
                        {/* <Link to={openPage} > </Link>     */}
                        Atualizar

                    </button>
                </div>
            </form>
        </>






    )


}
export default UpdateInfoDisease;