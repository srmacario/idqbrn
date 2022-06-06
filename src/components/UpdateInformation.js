import stylesCorpo from "./css/stylesCorpo.module.css"
import React, { useState,useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateInformations() {
    const [values, setValues] = useState({});
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
    const UpdateInfo = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const info = Object.fromEntries(formData);
        info.doenca = Object.values(doencaNome).toString().replaceAll(',', '');
        console.log(info);
        axios.post('http://localhost:8080/info/', info)
            .then(res => console.log(res.data));




    }
    const handleEntry = (event) => {
        //event.preventDefault();
        const target = event.target;
        const { name, value } = target;
        console.log("entry:", name, value);

    }

    return (
        <>
            <div className={stylesCorpo.cabecalho}>
                <div className={stylesCorpo.pagina}>{doencaNome}</div>
            </div>
            <div className={stylesCorpo.corpo}>
                <form onSubmit={UpdateInfo}>
                    <textarea className={stylesCorpo.insertText1} placeholder="Insira as Formas de Contágio..." name="formasdecontagio" defaultValue={formaDeContagio} cols="50" row="2" onChange={handleEntry}></textarea>
                    <p></p>
                    <textarea className={stylesCorpo.insertText2} placeholder="Insira os Sintomas..." name="sintomas" defaultValue={sintomas} cols="50" row="10" onChange={handleEntry}></textarea>
                    <p></p>
                    <textarea className={stylesCorpo.insertText2} placeholder="Insira as Recomendações..." name="recomendacoes" defaultValue={recomendacoes} cols="50" row="10" onChange={handleEntry}></textarea>
                    <p></p>
                    <button className={stylesCorpo.input} type="submit">Atualizar</button>
                </form>
            </div>
        </>

    )



}
export default UpdateInformations;