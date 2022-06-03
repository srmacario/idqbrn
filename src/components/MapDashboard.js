import React from 'react'
import Map from './Map'
import MenuNav from './MenuNav'
import axios from 'axios'

class MapDashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      dados: [],
      cidades_opt: [],
      
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
        <MenuNav dados={dados} cidades_opt={cidades_opt} />
        <Map />
      </>
    );
  }
}

export default MapDashboard;