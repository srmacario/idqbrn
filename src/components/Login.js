import { useState } from "react";

import Lock from './img/lock.svg'
//import BrasilAzul from './img/brasilAzul.png'

import "./css/stylesLogin.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registrarUsuario(event) {
        event.preventDefault()

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

        console.log(data)
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
                            <button className="login-form-btn" onClick={registrarUsuario}>Login</button>
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