//import "./css/styleCorpo.css";
import stylesCorpo from "./css/stylesCorpo.module.css"
import React, { useState } from 'react'
import { useParams } from "react-router-dom";
//import { handleInputChange } from "react-select/dist/declarations/src/utils";
function UpdateCasesNumber(){
    const[value,setValue]=useState();//inicial
    function changeCaseNumber(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const number = Object.fromEntries(formData);
        console.log("entry:",number)

    }
    const handleInput = (event)=>{
        console.log("handleInput:",event.target.value);
        setValue(event.target.value);

    }
    
    
    return(
        <>
            <div className={stylesCorpo.cabecalho}>
                <div className={stylesCorpo.pagina}>Atualizar número de casos</div>
            </div>
            
            <div className={stylesCorpo.corpo}>
                
                <form onSubmit={changeCaseNumber}>
                    <div>
                        
                        <input
                        className={stylesCorpo.insert}
                        type="number"
                        id="number"
                        name="number"
                        placeholder="Digite o novo número de casos."
                        onChange = {handleInput}
                        />
                    </div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                  
                    <div>
                        <input className={stylesCorpo.input} type="submit" value="Inserir"/>
                    </div>
                </form>
            </div>
        </>
        )
}
export default UpdateCasesNumber;