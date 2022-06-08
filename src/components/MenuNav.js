import React from 'react'
import stylesMapa from "./css/stylesMapa.module.css"
import IDQBRNlogo from './img/IDQBRNLogoWhite.png'
import CityMarker from '../CityMarker';
import NewCheckbox from './NewCheckbox'
import Select from 'react-select'

export default function MenuNav(props) {
    const dados = props.dados;
    const cidades_opt = props.cidades_opt;
    const city_filter = props.city_filter;
    const doencas_lista = props.doencas_lista;

    const filterConfig = {
        ignoreCase: false,
        ignoreAccents: true,
        trim: true,
        matchFrom: 'start',
        stringify: option => `${option.label} ${option.value}`
    };
    console.log('menunav');
    function activateCheck(e) {
        var selected = e.target.checked;
        var value = e.target.value;
        console.log(e.target);
        if (selected) {
            props.city_filter.push(value.toUpperCase());
        }
        else {
            let length = props.city_filter.length;
            for (let i = 0; i < length; i++) {
                if (props.city_filter[i] === value.toUpperCase())
                    props.city_filter.splice(i, 1);
            }
        }
        console.log(props.city_filter);
        var union_filtered = []
        if (props.city_filter.length > 0) {
            var filtered = [];
            for (let i = 0; i < props.city_filter.length; i++) {
                filtered = dados.filter(item => {
                    return parseInt(item[props.city_filter[i]]) > 0;
                })
                union_filtered = [...new Set([...union_filtered, ...filtered])];
            }
            console.log("dados filtrados");
            console.log(union_filtered);
            props.setMarkers((prevValue) => prevValue = [])
            var newMarkersArray = []
            for (let i = 0; i < union_filtered.length; i++) {
                const aux = union_filtered[i]
                newMarkersArray.push(new CityMarker(aux, doencas_lista));

            }
            props.setMarkers(newMarkersArray)
        }
        else
            props.setMarkers([]);
    }

    var selectValue = "";
    return (
        <div className={stylesMapa.menuNav}>
            <div className={stylesMapa.titulo}>
                <img alt="Logo" className={stylesMapa.logo} src={IDQBRNlogo} />
            </div>

            <div className={stylesMapa.container}>
                <form className={stylesMapa.wrap} >
                    <div className={stylesMapa.searchTerm}>
                        <Select options={cidades_opt} placeholder="Buscar por uma cidade..." openMenuOnClick={true}
                            filterConfig={filterConfig}
                            onChange={e => {
                                selectValue = e.value;
                                console.log("sv" + selectValue);
                                const find_cidade = dados.find(dado => dado['Municipio'] === selectValue);
                                console.log("filtro");
                                console.log(find_cidade);
                                props.setMarkers([]);
                                props.setMarkers((prevValue) => [...prevValue, new CityMarker(find_cidade, doencas_lista)]);
                                props.setCenter([parseFloat(find_cidade['latitude'].replace(',', '.')), parseFloat(find_cidade['longitude'].replace(',', '.'))])
                                console.log(parseFloat(find_cidade['latitude'].replace(',', '.')));
                            }}
                            onInputChange={e => {
                                if (e.length > 0)
                                    selectValue = e;
                                console.log("sv" + selectValue)
                            }} on />
                    </div>
                </form>

                <div className={stylesMapa.containerList}>
                    <ul className={stylesMapa['ks-cboxtags']}>
                        {doencas_lista.map(doenca => <li key={doenca}><NewCheckbox id={doenca} onChange={activateCheck} navigate={props.navigate} value={doenca} city_filter={city_filter} /></li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}