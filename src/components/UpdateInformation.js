import stylesCorpo from "./css/stylesCorpo.module.css"
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";

function UpdateInformations() {
    const [values, setValues] = useState({});
    let { doencaNome } = useParams();

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
                    <textarea className={stylesCorpo.insertText1} name="formasdecontagio" placeholder="Formas de Contágio." cols="50" row="2" onChange={handleEntry}></textarea>
                    <p></p>
                    <textarea className={stylesCorpo.insertText2} name="sintomas" placeholder="Sintomas." cols="50" row="10" onChange={handleEntry}></textarea>
                    <p></p>
                    <textarea className={stylesCorpo.insertText2} name="recomendacoes" placeholder="Recomendações." cols="50" row="10" onChange={handleEntry}></textarea>
                    <p></p>
                    <button className={stylesCorpo.input} type="submit">Atualizar</button>
                </form>
            </div>
        </>

    )



}
export default UpdateInformations;