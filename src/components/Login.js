import { useState } from "react";
import axios from 'axios'

import Lock from './img/lock.svg'
//import BrasilAzul from './img/brasilAzul.png'

import "./css/stylesLogin.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function logar(event) {
        event.preventDefault()
        localStorage.removeItem('token')
        axios.post('http://localhost:8080/login',{
            email,
            password,
        })
        .then(response =>{
            if(response.data.user){
                localStorage.setItem('token', response.data.user)
                alert('Logado com sucesso!')
                window.location.href = '/user'
            }
            else{
                alert('Cheque suas credenciais!')
            }
            console.log(response.data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title"> Administrador </span>

                        <span className="login-form-title">
                            <img src={Lock} alt="Jovem Programador" />
                        </span>

                        <div className="wrap-input">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn" onClick={logar}>Login</button>
                        </div>

                        <div className="text-center">
                            {/*<a className="txt2" href="#">Esqueci a senha</a>*/}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;