import "./css/styleCorpo.css";
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
function UpdateCases(){
    function changeCaseNumber(event){
        event.preventDefault();

    }
    const[caseNumber,setCaseNumber]=useState()
    
    
    return(
        <>
            <div className="cabecalho">
                <div className="pagina">Atualizar número de casos</div>
            </div>
            
            <div className="corpo">
                <form onSubmit={changeCaseNumber}/>
                <form>
                    <div>
                        
                        <input
                        className="insertNumberofCases"
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
                        <input className= "inputNumber" type="submit" value="Inserir"/>
                    </div>
                </form>
            </div>
        </>
        )
}
export default UpdateCases;