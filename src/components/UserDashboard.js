import stylesUser from "./css/stylesUser.module.css"
import React, { useEffect, useState } from 'react'
import { Link , useNavigate } from "react-router-dom";
import jwt from 'jsonwebtoken'

function UserDashboard() {

    let navigate = useNavigate();
    // const doencas_lista;

    function loadUser() {
        axios.get('http://localhost:8080/users/')
          .then(response => {
            this.setState({ dados: response.data, dados_filtrados: response.data });
            if (this.state.cidades_opt.length === 0) {
              response.data.forEach(element => {
                this.state.cidades_opt.push({ label: element['Municipio'], value: element['Municipio'] })
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

    //function to check if there is a token on the session
	useEffect(() => {
		const token = localStorage.getItem('token')
		if (token) {
			const user = jwt.decode(token)
            //false token: forbidden!
			if (!user) {
				localStorage.removeItem('token')
				navigate('/login')
			} else {
                //login sucessful: render user list
                console.log(token)
			}
		}
        //no token: forbidden to enter!!!
        else{
            navigate('/login')
        }
	}, [])

    return (
        <>
            <div className={stylesUser.cabecalho}>
                <div className={stylesUser.pagina}>Controle de Administrador</div>
            </div>
            <div className={stylesUser.corpo}>
                <div className={stylesUser.conteudo}>
                    <ul className={stylesUser['list-items']}>
                        <li><Link to="/update_info">Alterar Informações sobre uma Doença</Link></li>
                        <li><Link to="/update_cases">Alterar número de casos em uma cidade</Link></li>
                        <li><Link to="/upload">Carregar planilha no Banco de Dados</Link></li>
                    </ul>
                </div>
            </div>

            <div className={stylesUser.menuNav}>
                <div className={stylesUser.titulo}>
                    <div className={stylesUser.emailListName}>E-mails Cadastrados</div>
                </div>

                <div className={stylesUser.container}>
                    <form className={stylesUser.signContainer} >
                        <div className="search">
                            <input type="email" className="searchTerm" placeholder="Email" />
                            <input type="password" className="searchTerm" placeholder="Senha" />
                            <input type="password" className="searchTerm" placeholder="Confirmar Senha" />
                            <button type="submit" className={stylesUser.outline}>Cadastrar</button>
                        </div>
                    </form>

                    <div className={stylesUser.containerList}>
                        <ul className={stylesUser['list-items']}>
                            <li><button className={stylesUser.email}>example@gmail.com</button></li>
                            <li><button className={stylesUser.email}>example2@gmail.com</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )



}
export default UserDashboard;