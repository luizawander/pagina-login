import React, { useState } from 'react';
import logoIMG from './assets/logozap.png'
import './styles.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div  className="container"> 
      <div className="conteiner-login">
        <div className="wrap-login">
          <form className="login-form">

          <span className="login-form-tittle"> Bem Vindo!</span>

          <span className="login-form-tittle">
                <img src={logoIMG} alt="Logo com Raio" />
          </span>

              <div className='wrap-input'>
                  <input className={email !== "" ? "has-val input" : "input"} type='email' value={email} onChange={e => setEmail(e.target.value)} />  
                  <span className='focus-input' data-placeholder="Email"> </span>
              </div>

              <div className='wrap-input'>
                  <input className={password !== "" ? "has-val input" : "input"} type='Password' value={password} onChange={e => setPassword(e.target.value)} />
                  <span className='focus-input' data-placeholder="Password"> </span>  
              </div>

              <div className='container-login-form-btn'>
                <button className='login-form-btn'>Login</button>
              </div>

              <div className='text-center'>
                <span className='txt1'> Não possui conta?</span>
                <a className="txt2" href="#"> Criar.</a>
            
              </div>

          </form>
        </div> {/* div wrap-login */ }
      </div> {/* div conteiner-login */ }
    </div> 
  );
}

export default App;
