import React,{useState} from 'react'
import Blank from './img/blank.png'
import BrasilAzul from './img/brasilAzul.png'
import Lock from './img/lock.svg'
//import styles from './css/style.module.css'
//import stylesMapa from './css/stylesMapa.module.css'



function Login() {
    const searchUser=(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const searchU = Object.fromEntries(formData);
        console.log(searchU);
    }
    const[value,setValues]=useState({});
    const handleChange = (event)=>{
        const target = event.target;
        const{name,value} = target;
        console.log("entry:",name,value);
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
                <form onSubmit={searchUser}>
                    <div>
                    <img src = {Lock}/>
                    <h2 className = "title">Administrador</h2>
                    <div className = "input-div one">
                        <div className = "i">
                            <i className = "fas fa-user"></i>
                        </div>
                        <div className = "div">
                            <h5>Usuário</h5>
                            <input type="text" className = "input" onChange={handleChange}/>
                        </div>
                    </div>
                    <div className = "input-div pass">
                        <div className = "i">
                            <i className = "fas fa-lock"></i>
                        </div>
                        <div className = "div">
                            <h5>Senha</h5>
                            <input type="password" className = "input" onChange={handleChange}/>
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
