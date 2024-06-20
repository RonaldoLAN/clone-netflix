import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {

  const [signState, setSignState] = useState("Entrar")
  

  return (
    <div className='login'>
      <img src={logo} alt="" className='login-logo'/>
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState==="Cadastrar"?<input type="text" placeholder='Seu Nome'/>:<></>}
          <input type="email" placeholder='Email'/>
          <input type="password" placeholder='Senha'/>
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Lembre-se de mim</label>
            </div>
            <p>Precisa de ajuda?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState==="Entrar"?
          <p>Novo por aqui? <span onClick={()=>{setSignState("Cadastrar")}}>Assine agora</span></p>
          :<p>Já tem uma conta aqui? <span onClick={()=>{setSignState("Entrar")}}>Entre agora</span></p>
        }
          
        </div>
      </div>
    </div>
  )
}

export default Login