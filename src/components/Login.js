import React from 'react'
import MapDashboard from './MapDashboard'
import Blank from './img/blank.png'
import BrasilAzul from './img/brasilAzul.png'
import Lock from './img/lock.svg'
//import './css/style.css'


function Login() {
    return (
      <>
        <img className = "wave" src = {BrasilAzul}/>
        <div className = "container">
            <div className = "img">
			    <img src = {Blank}/>
            </div>
            <div className = "login-content">
                <form>
                    <img src = {Lock}/>
                    <h2 className = "title">Administrador</h2>
                    <div className = "input-div one">
                        <div className = "i">
                            <i className = "fas fa-user"></i>
                        </div>
                        <div className = "div">
                            <h5>Usuário</h5>
                            <input type="text" className = "input"/>
                        </div>
                    </div>
                    <div className = "input-div pass">
                        <div className = "i">
                            <i className = "fas fa-lock"></i>
                        </div>
                        <div className = "div">
                            <h5>Senha</h5>
                            <input type="password" className = "input"/>
                        </div>
                    </div>
                    <a href="#">Esqueci a senha</a>
                    <input type="submit" className = "btn" value="Login"/>
                </form>
            </div>
        </div>
      </>
    );
}

export default Login;

