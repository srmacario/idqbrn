import React from 'react'
import IDQBRNlogo from './img/IDQBRNLogoWhite.png'
import CityMarker from '../CityMarker';
import NewCheckbox from './NewCheckbox'
import Select from 'react-select'

export default function MenuNav(props) {
    const dados = props.dados;
    const cidades_opt = props.cidades_opt;
    const filterConfig = {
        ignoreCase: false,
        ignoreAccents: true,
        trim: true,
        matchFrom: 'start',
        stringify: option => `${option.label} ${option.value}`
    };
    console.log('menunav');
    console.log(dados);
    console.log(cidades_opt);

    // dados.forEach(element => {
    //     cidades_opt.push({label: element['Municipio'], value: element['Municipio']});
    // });
    //console.log(cidades_opt);

    function activateCheck(e) {
        var selected = e.target.checked;
        var value = e.target.value;
        var id = e.target.id//Esse ID não sera target.id mas sim o valor do ID do IBGE que está no banco de dados para cada cidade
        if (selected) {
            props.setMarkers((prevValue) => [...prevValue, new CityMarker(id, value, 0, -10.613282, -40.484189)]);//AQUI VAMOS PASSAR OS PARAMETROS SEMPRE QUE CrIAR UM NOVO MARCADOR
        }
        else {
            props.setMarkers(props.markersArray.filter(item => item.getDoenca() !== value));
        }
    }
 
    var selectValue = "";
    return (
        <div className="menuNav">
            <div className="titulo">
                <img alt="Logo" className="logo" src={IDQBRNlogo} />
            </div>

            <div className="container">
                <form className="wrap" >
                    <div className="search">
                        <Select options={cidades_opt} placeholder="Buscar por uma cidade..." openMenuOnClick={true} 
                        filterConfig={filterConfig} 
                        onChange={e =>{
                            selectValue = e.value;
                            console.log("sv" + selectValue);
                            const find_cidade = dados.find(dado => dado['Municipio'] === selectValue);
                            console.log("filtro");
                            console.log(find_cidade);
                         }}
                         onInputChange={e =>{
                             if(e.length > 0)
                                selectValue = e;
                             console.log("sv" + selectValue)
                         }} on/>
                        
                    </div>
                </form>

                <div className="containerList">
                    <ul className="ks-cboxtags">

                        <li><NewCheckbox id={0} onChange={activateCheck} navigate={props.navigate} value="Dengue" /></li>
                        <li><NewCheckbox id={1} onChange={activateCheck} navigate={props.navigate} value="Febre Amarela" /></li>
                        <li><NewCheckbox id={2} onChange={activateCheck} navigate={props.navigate} value="Esquistossomose" /></li>
                        <li><NewCheckbox id={3} onChange={activateCheck} navigate={props.navigate} value="Malária" /></li>
                        <li><NewCheckbox id={4} onChange={activateCheck} navigate={props.navigate} value="Tuberculose" /></li>
                        <li><NewCheckbox id={5} onChange={activateCheck} navigate={props.navigate} value="Leishmaniose" /></li>
                        <li><NewCheckbox id={6} onChange={activateCheck} navigate={props.navigate} value="Doença de Chagas" /></li>
                        <li><NewCheckbox id={7} onChange={activateCheck} navigate={props.navigate} value="Leptospirose" /></li>
                        <li><NewCheckbox id={8} onChange={activateCheck} navigate={props.navigate} value="Arboviroses Urbanas" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}