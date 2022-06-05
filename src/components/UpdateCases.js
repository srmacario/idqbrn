//import "./css/styleCorpo.css";
import stylesCorpo from "./css/stylesCorpo.module.css"
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
function UpdateCases(){
    const searchDatabase=(event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);
        const search = Object.fromEntries(formData);
        console.log(search);
    }
    const[values,setValues] = useState({});
    const handleEntry=(event)=>{
        const target = event.target;
        const{name,value}=target;
        console.log("entry:",name,value);
    }


    return(
        <>
            <div className={stylesCorpo.cabecalho}>
                <div className={stylesCorpo.pagina}>Atualizar casos</div>
            </div>
            
            <div className={stylesCorpo.corpo}>
                
                <form onSubmit={searchDatabase}>
                    <div>
                        {/* <label htmlFor = "city">Cidade:</label> */}
                        <input
                            className={stylesCorpo.insert}
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Digite a cidade que deseja-se alterar."
                            onChange = {handleEntry}
                        />
                    </div>
                    <p></p>
                    <div>
                        {/* <label htmlFor = "disease">Doença:</label> */}
                        <input
                            className={stylesCorpo.insert}
                            type="text"
                            id="disease"
                            name="disease"
                            placeholder="Digite a doença que deseja-se alterar."
                            onChange = {handleEntry}
                        />
                    </div>
                    <p></p>
                    <div>
                        <input className={stylesCorpo.input} type="submit" value="Procurar"/>
                    </div>
                </form>
            </div>
        </>
        )
}
export default UpdateCases;