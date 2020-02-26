import React, { Fragment , useState} from "react";
import Footer from './Footer';

const validate = (username, password) =>{
  return !!(username && password)
}

const Login = (props) => {
  
  const[username, setUsername] = useState('')
  const[password, setPassword]=useState('')
  const[error,setError]= useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(validate (username, password)){
      setError(false)
      props.onLogin({username, password})
    } else{
      setError(true)
    }
  }

  return (
    <Fragment>
      <section className="login">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-3 col-md-4 col-sm-6 col-7 mt-3vh">
              <img src="./assets/img/logo-punto-school.png" className="img-fluid" alt="Logotipo" />
            </div>
            <div className="col-sm-9 col-9"></div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-8 col-sm-9 col-12 mt-3">
              <h1 className="title">Juntas de Padres</h1>
              <h2 className="subtitle">livestreaming</h2>
            </div>
          </div>
          <div className="row justify-content-md-end justify-content-center mt-1vh">
            <div className="col-lg-5 col-md-6 col-sm-8 col-11">
              <form onSubmit={handleSubmit}>
                {error && <span style={{color:'red'}}>Información incorrecta</span>}
                <div className="login-form">
                  <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Correo Electrónico" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                  <button className="btn-border-white" type='submit'>Ingresar</button>
                  {/* <div className="contraseña">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div> */}
                </div>
              </form>
            </div>
            <div className="offset-md-2 col-sm-12 col-12 col-md-2 align-self-sm-end align-self-md-center">
              <div className="create-account">
                <i className="fas fa-plus-circle"></i>
                <h5> Crea <br /> tu cuenta </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Login;
