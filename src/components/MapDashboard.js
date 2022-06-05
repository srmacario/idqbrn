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

    }
  }
  async componentDidMount() {
    axios.get('http://localhost:8080/dados/')
      .then(response => {
        this.setState({ dados: response.data, dados_filtrados: response.data });
        if (this.state.cidades_opt.length === 0) {
          response.data.forEach(element => {
            this.state.cidades_opt.push({ label: element['Municipio'], value: element['Municipio'] })
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
    console.log("mapds");
    //console.log("dados" + dados);
    //console.log("cidade_opt" + cidades_opt);
    return (
      <>
        <MenuNav markersArray={this.props.markersArray} setMarkers={this.props.setMarkers}
          navigate={this.props.navigate} dados={dados} cidades_opt={cidades_opt}
          city_filter={city_filter} dados_filtrados={dados_filtrados} />
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