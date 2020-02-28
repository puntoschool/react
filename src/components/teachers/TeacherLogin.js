import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from '../Header'
import Footer from '../Footer'

const TeacherLogin = ({newUserAccount}) => {

  // Defino el objeto de cuenta
  const [account, setAccount] = useState({
    fullName:'', 
    userName:'', 
    password:'', 
    userType:'teacher'
  })

  // Creo el estado en caso de existir algun error
  const [error, setError] = useState(false)

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
       return
   } else setError(false)

   // invoco la funcion de crear cuenta
   newUserAccount(account)

   //Limpio el formulario de información
   setAccount({
    fullName:'', 
    userName:'', 
    password:'', 
    userType:'teacher'
   })
  }

  // Creo una variable por cada propiedad del objeto account
  const {fullName, userName, password} = account

  return (
    <Fragment>
      <Header/>
      <div className="teachers-login">
        <h1>Registro de maestros</h1>
        <form action="#">
          <div className="teachers-login__inputs">
            <input type="text" name="fullName" onChange = {handleChange} placeholder="Nombre completo" />
            <input type="email" name="userName" onChange = {handleChange} placeholder="Correo Electrónico" />
            <input type="password" name="password" onChange = {handleChange} placeholder="Contraseña" />
            <div className="teachers-login__btns">
                <Link className="btn-back-yellow" to="/UserSelecter">Regresar</Link>
                <Link className="btn-next-yellow" type='submit' onSubmit={handleSubmit}  to="/">Registrare</Link>
            </div>
          </div>
        </form>
      </div>
      <Footer/>
    </Fragment>
  );
};

export default TeacherLogin;


