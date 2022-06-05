import stylesCorpo from "./css/stylesCorpo.module.css"
import React, { useState } from 'react'
import { Navigate,Link } from "react-router-dom";

function UpdateInfoDisease(){
    const[disease,setDisease] = useState('Dengue');
    const handleClick=(event)=>{
        event.preventDefault();
        //console.log(Object.values(disease).toString().replaceAll(',',''));
        var doenca = Object.values(disease).toString().replaceAll(',','');
        openPage(doenca);


    }
    const handleChange = (event)=>{
        const doencaSelecionada = event.target.value;
        
        setDisease(doencaSelecionada);
        //console.log({disease});        
    }
    function openPage(link){
        var Link = '/update_info/'+link;
        //console.log(link);
        //navigate(Link);
        //return (Link);
        window.open(Link);
    }
    return (
        <>
            <div className={stylesCorpo.cabecalho}>
                <div className={stylesCorpo.pagina}>Escolher doença a ser atualizada</div>

            </div>
            <form onSubmit={handleClick}>
                <div className={stylesCorpo.corpo}>
                    <select className = {stylesCorpo.select} name="doenca" onChange={handleChange}>
                        <option value="Dengue" >Dengue</option>
                        <option value="Febre Amarela" >Febre Amarela</option>
                        <option value="Esquistossomose" >Esquistossomose</option>
                        <option value="Malária" >Malária</option>
                        <option value="Tuberculose" >Tuberculose</option>
                        <option value="Leshmaniose" >Leshmaniose</option>
                        <option value="Doença de Chagas" >Doença de Chagas</option>
                        <option value="Leptospirose" >Leptospirose</option>
                        <option value="Arboviroses Urbanas" >Arboviroses Urbanas</option>
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