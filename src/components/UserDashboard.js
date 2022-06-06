import stylesUser from "./css/stylesUser.module.css"
import React, { useEffect, useState } from 'react'
import { Link , useNavigate } from "react-router-dom";
import axios from 'axios'
import jwt from 'jsonwebtoken'

function UserDashboard() {

    let navigate = useNavigate();
    const [usersLista, setUsersLista] = useState([]);

    function loadUser() {
        axios.get('http://localhost:8080/users')
          .then(response => {
            if (usersLista.length === 0) {
                let tempLista = []
                response.data.forEach(element => {
                    tempLista.push(element['email'])
                });
                setUsersLista(tempLista)
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
                loadUser()
			}
		}
        //no token: forbidden to enter!!!
        else{
            navigate('/login')
        }
	}, [])


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");

    async function registrarUsuario(event) {
        event.preventDefault()
        if(repPassword !== password){
            alert('Senhas não são iguais')
        }
        else{
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })

            const data = await response.json()

            if(data.status === 'ok'){
                alert('Criado com sucesso!')
            }
            else{
                alert('Falha na criacao, cheque se o usuario ja existe!')
            }
            console.log(data)
        }
    }

    return (
        <>
            <div className={stylesUser.cabecalho}>
                <div className={stylesUser.pagina}>Controle de Administrador</div>
            </div>
            <div className={stylesUser.corpo}>
                <div className={stylesUser.conteudo}>
                    <ul className={stylesUser['list-items']}>
                        <li><Link className={stylesUser.link} to="/update_info">Alterar Informações sobre uma Doença</Link></li>
                        <li><Link className={stylesUser.link} to="/update_cases">Alterar número de casos em uma cidade</Link></li>
                        <li><Link className={stylesUser.link} to="/upload">Carregar planilha no Banco de Dados</Link></li>
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
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" className="searchTerm" placeholder="Email" />
                            <input 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" className="searchTerm" placeholder="Senha" />
                            <input 
                                value={repPassword}
                                onChange={(e) => setRepPassword(e.target.value)}
                                type="password" className="searchTerm" placeholder="Confirmar Senha" />
                            <button type="submit" className={stylesUser.outline} onClick={registrarUsuario}>Cadastrar</button>
                        </div>
                    </form>

                    <div className={stylesUser.containerList}>
                        <ul className={stylesUser['list-items']}>
                        {usersLista.map(user => <li key={user}><button className={stylesUser.email}>{user}</button></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )



}
export default UserDashboard;