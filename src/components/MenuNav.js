import React, { useState } from 'react'
import IDQBRNlogo from './img/IDQBRNLogoWhite.png'
import CityMarker from '../CityMarker';
import NewCheckbox from './NewCheckbox'

export default function MenuNav({ markersArray, setMarkers, navigate }) {

    function findCity(e) {
        e.preventDefault()
        console.log(place)
    }

    function activateCheck(e) {
        var selected = e.target.checked;
        var value = e.target.value;
        var id = e.target.id//Esse ID não sera target.id mas sim o valor do ID do IBGE que está no banco de dados para cada cidade
        if (selected) {
            setMarkers((prevValue) => [...prevValue, new CityMarker(id, value, 0, -10.613282, -40.484189)]);//AQUI VAMOS PASSAR OS PARAMETROS SEMPRE QUE CrIAR UM NOVO MARCADOR
        }
        else {
            setMarkers(markersArray.filter(item => item.getDoenca() !== value));
        }
    }

    const [place, setPlace] = useState()

    return (
        <div className="menuNav">
            <div className="titulo">
                <img alt="Logo" className="logo" src={IDQBRNlogo} />
            </div>

            <div className="container">
                <form className="wrap" onSubmit={findCity}>
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Buscar por uma cidade..." onChange={(e) => setPlace(e.target.value)} />
                        <button type="submit" className="searchButton">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </form>

                <div className="containerList">
                    <ul className="ks-cboxtags">
                        <li><NewCheckbox id={0} onChange={activateCheck} navigate={navigate} value="Dengue" /></li>
                        <li><NewCheckbox id={1} onChange={activateCheck} navigate={navigate} value="Febre Amarela" /></li>
                        <li><NewCheckbox id={2} onChange={activateCheck} navigate={navigate} value="Esquistossomose" /></li>
                        <li><NewCheckbox id={3} onChange={activateCheck} navigate={navigate} value="Malária" /></li>
                        <li><NewCheckbox id={4} onChange={activateCheck} navigate={navigate} value="Tuberculose" /></li>
                        <li><NewCheckbox id={5} onChange={activateCheck} navigate={navigate} value="Leishmaniose" /></li>
                        <li><NewCheckbox id={6} onChange={activateCheck} navigate={navigate} value="Doença de Chagas" /></li>
                        <li><NewCheckbox id={7} onChange={activateCheck} navigate={navigate} value="Leptospirose" /></li>
                        <li><NewCheckbox id={8} onChange={activateCheck} navigate={navigate} value="Arboviroses Urbanas" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}