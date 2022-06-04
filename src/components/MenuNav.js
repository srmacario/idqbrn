import React from 'react'
import IDQBRNlogo from './img/IDQBRNLogoWhite.png'
import CityMarker from '../CityMarker';
import NewCheckbox from './NewCheckbox'
import Select from 'react-select'

export default function MenuNav(props) {
    const dados = props.dados;
    const cidades_opt = props.cidades_opt;
    const markersArray = props.markersArray;
    const city_filter = props.city_filter;
    

    const filterConfig = {
        ignoreCase: false,
        ignoreAccents: true,
        trim: true,
        matchFrom: 'start',
        stringify: option => `${option.label} ${option.value}`
    };
    console.log('menunav');
    //console.log(dados);
    //console.log(cidades_opt);

    // dados.forEach(element => {
    //     cidades_opt.push({label: element['Municipio'], value: element['Municipio']});
    // });
    //console.log(cidades_opt);

    function activateCheck(e) {
        var selected = e.target.checked;
        var value = e.target.value;
        var id = e.target.id//Esse ID não sera target.id mas sim o valor do ID do IBGE que está no banco de dados para cada cidade
        console.log(e.target);
        if (selected) {
            props.city_filter.push(value.toUpperCase());
            props.setMarkers((prevValue) => [...prevValue, new CityMarker(id, value, 0, -10.613282, -40.484189)]);//AQUI VAMOS PASSAR OS PARAMETROS SEMPRE QUE CrIAR UM NOVO MARCADOR
        }
        else {
            let length = props.city_filter.length;
            for (var i = 0; i < length; i++) {
                if (props.city_filter[i] === value.toUpperCase())
                    props.city_filter.splice(i, 1);
            }
            //props.setMarkers(props.markersArray.filter(item => item.getDoenca() !== value));
        }
        console.log(props.city_filter);
        var filtered = []
        if (props.city_filter.length > 0) {
            filtered = dados;
            for (var i = 0; i < props.city_filter.length; i++) {
                //console.log(i);
                filtered = filtered.filter(item =>{
                    return parseInt(item[props.city_filter[i]]) > 0;
                })
            }
            console.log("dados filtrados");
            console.log(filtered);
            props.setMarkers((prevValue) => prevValue = [])
            for(var i = 0; i < filtered.length; i++){
                const aux = filtered[i]
                console.log(aux);

                props.setMarkers((prevValue) => [...prevValue, new CityMarker(aux['IBGE7'], "buttons", 0,
                parseFloat(aux["latitude"].replace(',', '.')), parseFloat(aux["longitude"].replace(',', '.')))]);//AQUI VAMOS PASSAR OS PARAMETROS SEMPRE QUE CrIAR UM NOVO MARCADOR

            }
            
        }
        else
            props.setMarkers([]);
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
                            onChange={e => {
                                selectValue = e.value;
                                console.log("sv" + selectValue);
                                const find_cidade = dados.find(dado => dado['Municipio'] === selectValue);
                                console.log("filtro");
                                console.log(find_cidade);
                                props.setMarkers([]);
                                props.setMarkers((prevValue) => [...prevValue, new CityMarker(find_cidade['IBGE7'], "searchbar", 0,
                                    parseFloat(find_cidade['latitude'].replace(',', '.')), parseFloat(find_cidade['longitude'].replace(',', '.')))]);
                                console.log(parseFloat(find_cidade['latitude'].replace(',', '.')));
                            }}
                            onInputChange={e => {
                                if (e.length > 0)
                                    selectValue = e;
                                console.log("sv" + selectValue)
                            }} on />

                    </div>
                </form>

                <div className="containerList">
                    <ul className="ks-cboxtags">

                        <li><NewCheckbox id={0} onChange={activateCheck} navigate={props.navigate} value="Dengue" city_filter={city_filter} /></li>
                        <li><NewCheckbox id={1} onChange={activateCheck} navigate={props.navigate} value="Febre Amarela" city_filter={city_filter} /></li>
                        <li><NewCheckbox id={2} onChange={activateCheck} navigate={props.navigate} value="Esquistossomose" city_filter={city_filter} /></li>
                        <li><NewCheckbox id={3} onChange={activateCheck} navigate={props.navigate} value="Malária" city_filter={city_filter} /></li>
                        <li><NewCheckbox id={4} onChange={activateCheck} navigate={props.navigate} value="Tuberculose" city_filter={city_filter} /></li>
                        <li><NewCheckbox id={5} onChange={activateCheck} navigate={props.navigate} value="Leishmaniose" city_filter={city_filter} /></li>
                        <li><NewCheckbox id={6} onChange={activateCheck} navigate={props.navigate} value="Doença de Chagas" city_filter={city_filter} /></li>
                        <li><NewCheckbox id={7} onChange={activateCheck} navigate={props.navigate} value="Leptospirose" city_filter={city_filter} /></li>
                        <li><NewCheckbox id={8} onChange={activateCheck} navigate={props.navigate} value="Arboviroses Urbanas" city_filter={city_filter} /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}