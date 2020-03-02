import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from '../Header'
import Footer from '../Footer'
import Error from '../Error'


const ParentsLogin = ({newUserAccount}) => {

  // Defino el objeto de cuenta
  const [account, setAccount] = useState({
    fullName:'', 
    userName:'', 
    password:'', 
    userType:'parent'
  })

  // Creo el estado en caso de existir algun error
  const [error, setError] = useState(false)
  const[errorType,setErrorType]= useState('')

  // Actualizo el estado de cuenta con la informacion ingresada en el formulario
  const handleChange = e =>{
    setAccount({
        ...account,
        [e.target.name] : e.target.value
    })
  }

  // Creo la funcion cuando el usuario hace click en el boton de registrarse
  const handleSubmit = (e) =>{
    e.preventDefault()

   // Valido informacion capturada
   if (fullName.trim() === '' || userName.trim() === '' || password.trim() === ''){
       setError(true)
       setErrorType('Todos los campos son obligatorios')
       return
   } else setError(false)

   // invoco la funcion de crear cuenta
   newUserAccount(account)

   //Limpio el formulario de información
   setAccount({
    fullName:'', 
    userName:'', 
    password:'', 
    userType:'parent'
   })
  }

  // Creo una variable por cada propiedad del objeto acount
  const {fullName, userName, password} = account

  return (
    <Fragment>
      <Header/>
      <div className="parents-login">
        <h1>Registro de Padres de familia</h1>
        <form
          onSubmit={handleSubmit}
        >
          <div className="parents-login__inputs">
            <input type="text" name="fullName" onChange = {handleChange} placeholder="Nombre completo" />
            <input type="email" name="userName" onChange = {handleChange} placeholder="Correo Electrónico" />
            <input type="password" name="password" onChange = {handleChange} placeholder="Contraseña" />
            {error ? <Error message={errorType}/> : null}
            <div className="parents-login__btns">
                <Link className="btn-back-blue" to="/UserSelecter">Regresar</Link>
                <button className="btn-next-yellow" type='submit' onSubmit={handleSubmit}>Registrare</button>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default ParentsLogin;


