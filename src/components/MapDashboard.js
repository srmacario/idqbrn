import React, { useState } from 'react';
import Mapa from './Mapa'
import MenuNav from './MenuNav'
import CityMarker from '../CityMarker';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
class MapDashboard extends React.Component {

  constructor() {
    super();
    this.state = {
      dados: [],
      cidades_opt: []
    }
  }
  async componentDidMount() {
    axios.get('http://localhost:8080/dados/')
      .then(response => {
        this.setState({ dados: response.data });
        if (this.state.cidades_opt.length == 0) {
          response.data.forEach(element => {
            this.state.cidades_opt.push({ label: element['Municipio'], value: element['Municipio'] })
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
    console.log("mapds");
    console.log(dados);
    console.log(cidades_opt);
    return (
      <>
        <MenuNav markersArray={this.props.markersArray} setMarkers={this.props.setMarkers} navigate={this.props.navigate} dados={dados} cidades_opt={cidades_opt} />
        <Mapa markersArray={this.props.markersArray} />
      </>
    );
  }
}

export default function MapDashboardFunc(props) {
  const initialMarkers = [new CityMarker(-1, "Nada", 0, -14.613282, -48.484189)];
  const [markersArray, setMarkers] = useState(initialMarkers);
  const navigate = useNavigate();

  return <MapDashboard {...props} navigate={navigate} markersArray={markersArray} setMarkers={setMarkers} />;
}