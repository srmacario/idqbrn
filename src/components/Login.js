import React,{useState} from 'react'
import Blank from './img/blank.png'
import BrasilAzul from './img/brasilAzul.png'
import Lock from './img/lock.svg'
//import styles from './css/style.module.css'
//import stylesMapa from './css/stylesMapa.module.css'



function Login() {
    const[usuario, setUsuario] = useState('')
    const[senha, setSenha] = useState('')

    async function registrarUsuario(event){
        event.preventDefault()

        const response = await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json', 
            },
            body : JSON.stringify({
                usuario,
                senha,
            }),
        })

        const data = await response.json()

        console.log(data)
    }

    return (
      <>
        <img className = "wave" src = {BrasilAzul}/>
        <div className = "container">
            <div className = "img">
			    <img src = {Blank}/>
            </div>
        </div>
        <div className = "login-content">
                <form onSubmit = {registrarUsuario}>
                    <div>
                    <img src = {Lock}/>
                    <h2 className = "title">Administrador</h2>
                    <div className = "input-div one">
                        <div className = "i">
                            <i className = "fas fa-user"></i>
                        </div>
                        <div className = "div">
                            <h5>Usuário</h5>
                            <input type="text" className = "input" value = {usuario} onChange={(e) => setUsuario(e.target.value)}/>
                        </div>
                    </div>
                    <div className = "input-div pass">
                        <div className = "i">
                            <i className = "fas fa-lock"></i>
                        </div>
                        <div className = "div">
                            <h5>Senha</h5>
                            <input type="password" className = "input" value = {senha} onChange={(e) => setSenha(e.target.value)}/>
                        </div>
                    </div>
                    {/* <a href="#">Esqueci a senha</a> */}
                    </div>
                    <div>
                        <input type="submit" className = "btn" value="Login"/>
                    </div>
                </form>
        </div>

      </>
    );
}

export default Login;
