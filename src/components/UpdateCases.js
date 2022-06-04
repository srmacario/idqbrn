//import "./css/styleCorpo.css";
import stylesCorpo from "./css/stylesCorpo.module.css"
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
function UpdateCases(){
    const searchDatabase=(event) =>{
        event.preventDefault();

    }
    const[city,setCity]=useState()
    const[disease,setDisease]=useState()
    
    return(
        <>
            <div className={stylesCorpo.cabecalho}>
                <div className={stylesCorpo.pagina}>Atualizar casos</div>
            </div>
            
            <div className={stylesCorpo.corpo}>
                <form onSubmit={searchDatabase}/>
                <form>
                    <div>
                        {/* <label htmlFor = "city">Cidade:</label> */}
                        <input
                            className={stylesCorpo.insertcity}
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Digite a cidade que deseja-se alterar."
                            onChange = {(event)=>setCity(event.target.value)}
                        />
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <div>
                        {/* <label htmlFor = "disease">Doença:</label> */}
                        <input
                            className={stylesCorpo.insertdisease}
                            type="text"
                            id="disease"
                            name="disease"
                            placeholder="Digite a doença que deseja-se alterar."
                            onChange = {(event)=>setDisease(event.target.value)}
                        />
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <div>
                        <input className={stylesCorpo.searchByDiseaseAndCity} type="submit" value="Procurar"/>
                    </div>
                </form>
            </div>
        </>
        )
}
export default UpdateCases;