import React, { useState } from "react";
import Header from '../Header'
import Footer from '../Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const ParentsLogin = ({newUserAcount}) => {

  // Defino el objeto de cuenta
  const [acount, setAcount] = useState({
    fullName:'', 
    userName:'', 
    password:'', 
    userType:'parent'
  })

  // Creo el estado en caso de existir algun error
  const [error, setError] = useState(false)

  // Actualizo el estado de cuenta con la informacion ingresada en el formulario
  const handleChange = e =>{
    setAcount({
        ...acount,
        [e.target.name] : e.target.value
    })
  }

  // Creo la funcion cuando el usuario hace click en el boton de registrarse
  const handleClick = (e) =>{
    // e.preventDefault()

   // Valido informacion capturada

   if (fullName.trim() === '' || userName.trim() === '' || password.trim() === ''){
       setError(true)
       return
   } else setError(false)

   // invoco la funcion de crear cuenta
   newUserAcount(acount)

   //Limpio el formulario de información
   setAcount({
    fullName:'', 
    userName:'', 
    password:'', 
    userType:'parent'
   })
  }

  // Creo una variable por cada propiedad del objeto acount
  const {fullName, userName, password} = acount

  return (
    <Router>
      <Header/>
      <div className="parents-login">
        <h1>Registro de Padres de familia</h1>
        <form action="#">
          <div className="parents-login__inputs">
            <input type="text" name="fullName" onChange = {handleChange} placeholder="Nombre completo" />
            <input type="email" name="userName" onChange = {handleChange} placeholder="Correo Electrónico" />
            <input type="password" name="password" onChange = {handleChange} placeholder="Contraseña" />
            <div className="parents-login__btns">
                <Link className="btn-back-blue" to="/UserSelector">Regresar</Link>
                <Link className="btn-next-blue" onClick={handleClick}  to="/WelcomeParents">Registrare</Link>
            </div>
          </div>
        </form>
      </div>
      <Switch>
        <Route path="/UserSelector">
          {/* <About /> */}
        </Route>
        <Route path="/WelcomeParents">
          {/* <Users /> */}
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
};

export default ParentsLogin;


