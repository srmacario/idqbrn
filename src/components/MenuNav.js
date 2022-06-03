import React from 'react'
import IDQBRNlogo from './img/IDQBRNLogoWhite.png'
import CityMarker from '../CityMarker';

export default function MenuNav({ markersArray, setMarkers }) {

    function activateCheck(e) {
        var selected = e.target.checked;
        var value = e.target.value;
        if (selected) {
            console.log("You selected " + value);
            setMarkers((prevValue) => [...prevValue, new CityMarker(1, value, 0, 14.613282, -48.484189)]);
        }
        else {
            console.log("You unselected " + value);
            setMarkers(markersArray.filter(item => item.getDoenca() !== value));
        }
    }


    return (
        <div className="menuNav">
            <div className="titulo">
                <img alt="Logo" className="logo" src={IDQBRNlogo} />
            </div>

            <div className="container">
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Buscar..." />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>

                <div className="containerList">
                    <ul className="ks-cboxtags">
                        <li><input type="checkbox" id="checkboxOne" onChange={activateCheck} value="Dengue" />
                            <label htmlFor="checkboxOne" >Dengue</label></li>
                        <li><input type="checkbox" id="checkboxTwo" onChange={activateCheck} value="Febre Amarela" defaultChecked />
                            <label htmlFor="checkboxTwo">Febre Amarela</label></li>
                        <li><input type="checkbox" id="checkboxThree" onChange={activateCheck} value="Esquistossomose" defaultChecked />
                            <label htmlFor="checkboxThree">Esquistossomose</label></li>
                        <li><input type="checkbox" id="checkboxFour" onChange={activateCheck} value="Malária" />
                            <label htmlFor="checkboxFour">Malária</label></li>
                        <li><input type="checkbox" id="checkboxFive" onChange={activateCheck} value="Tuberculose" />
                            <label htmlFor="checkboxFive">Tuberculose</label></li>
                        <li><input type="checkbox" id="checkboxSix" onChange={activateCheck} value="Leishmaniose" defaultChecked />
                            <label htmlFor="checkboxSix">Leishmaniose</label></li>
                        <li><input type="checkbox" id="checkboxSeven" onChange={activateCheck} value="Doença de Chagas" />
                            <label htmlFor="checkboxSeven">Doença de Chagas</label></li>
                        <li><input type="checkbox" id="checkboxEight" onChange={activateCheck} value="Leptospirose" />
                            <label htmlFor="checkboxEight">Leptospirose</label></li>
                        <li><input type="checkbox" id="checkboxNine" onChange={activateCheck} value="Arboviroses Urbanas" />
                            <label htmlFor="checkboxNine">Arboviroses Urbanas</label></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}