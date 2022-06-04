//import "./css/styleCorpo.css";
import stylesCorpo from "./css/stylesCorpo.module.css"
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
function UpdateCasesNumber(){
    function changeCaseNumber(event){
        event.preventDefault();

    }
    const[caseNumber,setCaseNumber]=useState()
    
    
    return(
        <>
            <div className={stylesCorpo.cabecalho}>
                <div className={stylesCorpo.pagina}>Atualizar número de casos</div>
            </div>
            
            <div className={stylesCorpo.corpo}>
                <form onSubmit={changeCaseNumber}/>
                <form>
                    <div>
                        
                        <input
                        className={stylesCorpo.insertNumberofCases}
                        type="text"
                        id="number"
                        name="number"
                        placeholder="Digite o novo número de casos."
                        onChange = {(event)=>setCaseNumber(event.target.value)}
                        />
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                  
                    <div>
                        <input className={stylesCorpo.inputNumber} type="submit" value="Inserir"/>
                    </div>
                </form>
            </div>
        </>
        )
}
export default UpdateCasesNumber;