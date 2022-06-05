import stylesUser from "./css/stylesUser.module.css"
import React from 'react'
import { Link } from "react-router-dom";

function UserDashboard() {


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