import logoIMG from './assets/logozap.png'
import './styles.css'

function App() {
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
                  <input className='input' type='email' />
                  <span className='focus-input' data-placeholder="Email"> </span>
              </div>

              <div className='wrap-input'>
                  <input className='input' type='Password' />
                  <span className='focus-input' data-placeholder="Password"> </span>  
              </div>

              <div className='Container-login-form-btn'>
                <button className='login-form-btn'>Login</button>
              </div>

              <div className='text-center'>
                <span className='txt1'> Não possui conta?</span>
                <a className="txt2" href="#">Criar conta.</a>
            
              </div>

          </form>
        </div> {/* div wrap-login */ }
      </div> {/* div conteiner-login */ }
    </div> 
  );
}

export default App;
