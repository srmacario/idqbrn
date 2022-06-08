import React, { useState } from 'react';
import Mapa from './Mapa'
import MenuNav from './MenuNav'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
class MapDashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      dados: [],
      cidades_opt: [],
      city_filter: [],
      doencas_lista: []

    }
  }
  async componentDidMount() {
    axios.get('http://localhost:8080/dados/')
      .then(response => {
        this.setState({ dados: response.data, dados_filtrados: response.data });
        if (this.state.cidades_opt.length === 0) {
          response.data.forEach(element => {
            var curr_label = element['Municipio'] + ' (' + element['UF'] + ')';
            this.state.cidades_opt.push({ label: curr_label, value: element['IBGE7'] })
            if (this.state.doencas_lista.length === 0) {
              for (let i = 11; i < Object.keys(element).length; i++) {
                this.state.doencas_lista.push(Object.keys(element)[i]);
              }
            }
            // this.state.name_to_doc.set(element['Municipio'],element).catch(e => console.log(e));
          });
        }

      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    const dados = this.state.dados;
    const cidades_opt = this.state.cidades_opt;
    const city_filter = this.state.city_filter;
    const dados_filtrados = this.state.dados_filtrados;
    const doencas_lista = this.state.doencas_lista;
    console.log("mapds");
    return (
      <>
        <MenuNav markersArray={this.props.markersArray} setMarkers={this.props.setMarkers}
          navigate={this.props.navigate} dados={dados} cidades_opt={cidades_opt}
          city_filter={city_filter} dados_filtrados={dados_filtrados} doencas_lista={doencas_lista} />
        <Mapa markersArray={this.props.markersArray} />
      </>
    );
  }
}

export default function MapDashboardFunc(props) {
  const initialMarkers = [];
  const [markersArray, setMarkers] = useState(initialMarkers);
  const navigate = useNavigate();

  return <MapDashboard {...props} navigate={navigate} markersArray={markersArray} setMarkers={setMarkers} />;
}