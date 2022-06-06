import stylesCorpo from "./css/stylesCorpo.module.css"
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { withRouter } from "react-router";
import axios from 'axios'

export default function Informations() {
    let { doencaNome } = useParams();
    const[formaDeContagio, setFormasDeContagio] = useState("");
    const[sintomas, setSintomas] = useState("");
    const[recomendacoes, setRecomendacoes] = useState("");
    function capitalize_first_letter(string){
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        doencaNome = doencaNome.toLowerCase();
        doencaNome = capitalize_first_letter(doencaNome);
        axios.post('http://localhost:8080/info/doenca',{doenca:doencaNome})
        .then(res =>{
            setFormasDeContagio(res.data.formasdecontagio);
            setRecomendacoes(res.data.recomendacoes);
            setSintomas(res.data.sintomas);
        })
    });
    return (
        <>
            <div className={stylesCorpo.cabecalho}>
                <div className={stylesCorpo.pagina}>Informativo</div>
            </div>
            <div className={stylesCorpo.corpo}>
                <div className={stylesCorpo.doenca}>
                    <div className={stylesCorpo.caixa}>
                    </div>
                    <div className={stylesCorpo.identificacao}>
                        <p className={stylesCorpo.nome}>{doencaNome}</p>
                    </div>
                </div>
                <div className={stylesCorpo.conteudo}>
                    <p className={stylesCorpo.info}>Formas de Contágio: </p>
                    <p className={stylesCorpo.dados}>{formaDeContagio}</p>
                    <p className={stylesCorpo.info}>Sintomas: </p>
                    <p className={stylesCorpo.dados}>{sintomas}</p>
                    <p className={stylesCorpo.info}>Recomendações: </p>
                    <p className={stylesCorpo.dados}>{recomendacoes}</p>
                </div>
            </div>
        </>

    );
}