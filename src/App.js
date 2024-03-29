import logoIMG from './assets/logo.jpeg'

function App() {
  return (
    <div  className="container"> 
      <div className="conteiner-login">
        <div className="wrap-login">
          <form className="login-form">

              <span className="login-form-tittle"> Bem Vindo!</span>

              <span className="login-form-title">
                <img src={logoIMG} alt="Logo com Raio" />
              </span>

              <div className='wrap-input'>
                  <input type='email' />
                  <span className='focus-input' data-placeholder="Email"> </span>
              </div>

              <div className='wrap-input'>
                  <input type='Password' />
                  <span className='focus-input' data-placeholder="Password"> </span>  
              </div>

          </form>
        </div> {/* div wrap-login */ }
      </div> {/* div conteiner-login */ }
    </div> 
  );
}

export default App;
