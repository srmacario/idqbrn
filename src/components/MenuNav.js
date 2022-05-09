import React from 'react'
import ImeLogo from './img/imeLogo.png'

export default function MenuNav(){
    return(
        <div className = "menuNav">
            <div className = "titulo">
                <img className = "logo" src = {ImeLogo}/>
            </div>
            
            <div className = "container">
                <div className = "wrap">
                    <div className = "search">
                        <input type="text" className = "searchTerm" placeholder="Buscar..."/>
                        <button type="submit" className = "searchButton">
                            <i className = "fa fa-search"></i>
                        </button>
                    </div>
                </div>

                <div className = "containerList">
                    <ul className = "ks-cboxtags">
                        <li><input type="checkbox" id="checkboxOne" value="Dengue"/><label for="checkboxOne">Dengue</label>
                        </li>
                        <li><input type="checkbox" id="checkboxTwo" value="Febre Amarela" checked/><label
                                for="checkboxTwo">Febre Amarela</label></li>
                        <li><input type="checkbox" id="checkboxThree" value="Esquistossomose" checked/><label
                                for="checkboxThree">Esquistossomose</label></li>
                        <li><input type="checkbox" id="checkboxFour" value="Malária"/><label
                                for="checkboxFour">Malária</label></li>
                        <li><input type="checkbox" id="checkboxFive" value="Tuberculose"/><label
                                for="checkboxFive">Tuberculose</label></li>
                        <li><input type="checkbox" id="checkboxSix" value="Leishmaniose" checked/><label
                                for="checkboxSix">Leishmaniose</label></li>
                        <li><input type="checkbox" id="checkboxSeven" value="Doença de Chagas"/><label
                                for="checkboxSeven">Doença de Chagas</label></li>
                        <li><input type="checkbox" id="checkboxEight" value="Leptospirose"/><label
                                for="checkboxEight">Leptospirose</label></li>
                        <li><input type="checkbox" id="checkboxNine" value="Arboviroses Urbanas"/><label
                                for="checkboxNine">Arboviroses Urbanas</label></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}