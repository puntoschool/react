import React, { useState, useEffect} from "react";
import UserSelecter from './UserSelecter'
import DashboardTeachers from './teachers/DashboardTeachers'
import DashboardParents from './parents/DashboardParents'
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import './recordAcounts.json'

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
    <Router>
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
                
                <div className="login-form">
                  <input type="email" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Correo Electrónico" />
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                  {error && <span style={{color:'white', display:'block', marginBottom:'2rem'}}>Todos los campos son obligatorios / Información incorrecta</span>}
                  <Link to="/DashboardTeachers"><button className="btn-border-white" type='submit'>Ingresar</button></Link>
                  {/* <div className="contraseña">
                    <a href="#">¿Olvidaste tu contraseña?</a>
                  </div> */}
                </div>
              </form>
            </div>
            <div className="offset-md-2 col-sm-12 col-12 col-md-2 align-self-sm-end align-self-md-center">
              <div className="create-account">
                <Link to="/UserSelecter">
                  <i className="fas fa-plus-circle"></i>
                  <h5> Crea <br /> tu cuenta </h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Switch>
        <Route path="/UserSelecter">
          <UserSelecter />
        </Route>
        <Route path="/DashboardTeachers">
          <DashboardTeachers />
        </Route>
        <Route path="/DashboardParents">
          <DashboardParents />
        </Route>
      </Switch>
    </Router>
  );
};

export default Login;
